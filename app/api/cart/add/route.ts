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

function checkParams(user: string, productId: string, quantity: number, amount: number, image:string, description:string, name:string) {
    return !user || !productId || !quantity || !amount || !image || !description || !name;
}

const createCartData = (userId: string, productId: string, quantity: number, amount: number, image:string, description:string, name:string, price:number) => ({
    userId,
    productId: [productId],
    quantity: [quantity],
    amount,
    image: [image],
    description: [description],
    name: [name],
    price: [price]
});

const updateCartData = (productId: string, quantity: number, amount: number, image:string, description:string, name:string, price:number) => ({
    productId: {
        push: productId,
    },
    quantity: {
        push: quantity,
    },
    amount,
    image: {
        push: image
    },
    description: {
        push: description
    },
    name: {
        push: name
    },
    price: {
        push: price
    }
});

const createCart = async (user: string, productId: string, quantity: number, finalAmount: number, image:string, description:string, name:string, amount:number) => {
    const cartData = createCartData(user, productId, quantity, finalAmount, image, description, name, amount);

    await db.cart.create({
        data: cartData,
    });
};

const updateCart = async (cart: any, productId: string, quantity: number, finalAmount: number, image: string, description:string, name:string, price:number) => {
    const cartData = updateCartData(productId, quantity, finalAmount, image, description, name, price);

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

    const { user, productId, quantity, amount, image, description, name } = await request.json();

    if (checkParams(user, productId, quantity, amount, image, description, name)) {
        return NextResponse.json({ msg: MISSING_FIELDS_ERROR, status: "error" });
    }

    // try {
        const cart = await db.cart.findMany({
            where: {
                userId: user,
            },
        });

        const finalAmount = await calcCartAmount(cart, amount, quantity)
        cart.length > 0 ? await updateCart(cart, productId, quantity, finalAmount, image, description, name, amount) : await createCart(user, productId, quantity, finalAmount, image, description, name, amount);

        return NextResponse.json({ msg: SUCCESS_STATUS, status: "success" });
    // } catch (error) {
    //     return NextResponse.json({ msg: ERROR_STATUS, error: error, status: "error" });
    // }
}