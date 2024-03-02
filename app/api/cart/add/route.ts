import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import calcCartAmount from "@/lib/calcCartAmount";

const ERROR_STATUS = "Could not add product to cart. Please try again.";
const PRODUCT_EXISTS_ERROR = "Product already exists in cart";
const MISSING_FIELDS_ERROR = "All fields are required";
const SUCCESS_STATUS = "Product added to cart successfully";

function checkExistingProduct(cart: any, productId: string) {
    const existingProducts = cart[0].productId;
    return existingProducts.includes(productId);
}

function checkParams(user: string, productId: string, quantity: number, amount: number) {
    return !user || !productId || !quantity || !amount;
}

const createCartData = (userId: string, productId: string, quantity: number, amount: number) => ({
    userId,
    productId: [productId],
    quantity: [quantity],
    amount,
});

const updateCartData = (productId: string, quantity: number, amount: number) => ({
    productId: {
        push: productId,
    },
    quantity: {
        push: quantity,
    },
    amount,
});

const createCart = async (user: string, productId: string, quantity: number, finalAmount: number) => {
    const cartData = createCartData(user, productId, quantity, finalAmount);

    await db.cart.create({
        data: cartData,
    });
};

const updateCart = async (cart: any, productId: string, quantity: number, finalAmount: number) => {
    const cartData = updateCartData(productId, quantity, finalAmount);

    if (checkExistingProduct(cart, productId)) {
        return NextResponse.json({ msg: PRODUCT_EXISTS_ERROR, status: "error" });

    } else {
        await db.cart.update({
            where: {
                id: cart[0].id,
            },
            data: cartData,
        });
    }
};

// Add cart item
export async function POST(request: NextRequest) {

    const { user, productId, quantity, amount } = await request.json();

    if (checkParams(user, productId, quantity, amount)) {
        return NextResponse.json({ msg: MISSING_FIELDS_ERROR, status: "error" });
    }

    try {
        const cart = await db.cart.findMany({
            where: {
                userId: user,
            },
        });

        const finalAmount = await calcCartAmount(cart, amount, quantity)
        cart.length > 0 ? await updateCart(cart, productId, quantity, finalAmount) : await createCart(user, productId, quantity, finalAmount);

        return NextResponse.json({ msg: SUCCESS_STATUS, status: "success" });
    } catch (error) {
        return NextResponse.json({ msg: ERROR_STATUS, error: error, status: "error" });
    }
}