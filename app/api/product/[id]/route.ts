import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";

// Get specific product
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    let response = {};

    try {
        const product = await db.product.findUnique({
            where: {
                id: id,
            },
        });
        response = {
            product,
            msg: "Product fetched successfully",
            status: "success",
        };
    } catch (error: any) {
        response = {
            error: error.message,
            msg: "Could not fetch product",
            status: "error",
        };
    }

    return NextResponse.json(response);
}

// update product
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const userId = request.headers.get("x-user-id");
    const id = params.id;
    const { name, description, price, image, categorySlug } = await request.json();
    const isAdmin = await checkAdmin(userId);

    if (!isAdmin) {
        return NextResponse.json({
            msg: "You are not authorized to update a product",
            status: "error",
        });
    }

    if (!name || !description || !price || !image || !categorySlug) {
        return NextResponse.json({
            msg: "All fields are required",
            status: "error",
        });
    }

    const product = {
        name,
        description,
        price,
        image,
        categorySlug,
    };

    try {
        await db.product.update({
            where: {
                id: id,
            },
            data: product,
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Could not update product",
            status: "error",
        });
    }

    return NextResponse.json({
        msg: "Product updated successfully",
        status: "success",
    });
}

// remove product
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const userId = request.headers.get("x-user-id");
    const id = params.id;
    const isAdmin = await checkAdmin(userId);

    if (!isAdmin) {
        return NextResponse.json({
            msg: "You are not authorized to delete a product",
            status: "error",
        });
    }

    try {
        await db.product.delete({
            where: {
                id: id,
            },
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Could not delete product",
            status: "error",
        });
    }

    // TODO: Update the productsId array in the category

    return NextResponse.json({
        msg: "Product deleted successfully",
        status: "success",
    });
}
