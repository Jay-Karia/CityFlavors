import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";
import updateProductsId from "@/lib/updateProductsId";

export async function POST(request: NextRequest) {
    const userId = request.headers.get("x-user-id");
    const { name, description, price, image, categorySlug } = await request.json();
    const isAdmin = await checkAdmin(userId);

    if (!isAdmin) {
        return NextResponse.json({
            msg: "You are not authorized to add a product",
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
        name: name,
        description: description,
        price: price,
        image: image,
        categorySlug: categorySlug,
    };

    try {
        const newProduct = await db.product.create({
            data: product,
        });

        // Update the productsId array in the category
        await updateProductsId(newProduct);

        return NextResponse.json({
            newProduct,
            msg: "Product added successfully",
            status: "success",
        });

    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Could not add product",
            status: "error",
        });
    }
}
