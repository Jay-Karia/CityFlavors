import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

const MISSING_FIELDS = { msg: "Missing fields", status: "error" };
const CART_NOT_FOUND = { msg: "Cart not found", status: "error" };
const PRODUCT_NOT_FOUND = { msg: "Product not found in cart", status: "error" };
const ERROR_REMOVING_PRODUCT = { msg: "Error removing product from cart", status: "error" };
const PRODUCT_REMOVED = { msg: "Product removed from cart successfully", status: "success" };

export async function DELETE(request: NextRequest) {

    const { productId, cartId } = await request.json();

    if (!productId || !cartId) {
        return NextResponse.json(MISSING_FIELDS);
    }

    try {
        const cart = await db.cart.findUnique({
            where: {
                id: cartId
            }
        });

        if (!cart) {
            return NextResponse.json(CART_NOT_FOUND);
        }

        const productIndex = cart.productId.indexOf(productId);
        if (productIndex === -1) {
            return NextResponse.json(PRODUCT_NOT_FOUND);
        }

        const product = await db.product.findUnique({
            where: {
                id: productId
            }
        })

        let productAmount = 0;
        if (product) {
            productAmount = product.price * cart.quantity[productIndex];
        }

        const finalAmount = cart.amount - productAmount;
        cart.productId.splice(productIndex, 1);
        cart.quantity.splice(productIndex, 1);
        cart.image.splice(productIndex, 1)
        cart.description.splice(productIndex, 1)
        cart.name.splice(productIndex, 1)
        cart.price.splice(productIndex, 1)
        cart.amount = finalAmount;

        delete (cart as { id?: any }).id;

        await db.cart.update({
            where: {
                id: cartId
            },
            data: cart
        });


    } catch (error) {
        return NextResponse.json(ERROR_REMOVING_PRODUCT);
    }

    return NextResponse.json(PRODUCT_REMOVED);
}