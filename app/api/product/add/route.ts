import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";

export async function POST(request: NextRequest) {
    const userId = request.headers.get("x-user-id");
    const { name, description, price, image, category } = await request.json();
    const isAdmin = await checkAdmin(userId);

    if (!isAdmin) {
        return NextResponse.json({
            msg: "You are not authorized to add a product",
            status: "error",
        });
    }

    if (!name || !description || !price || !image || !category) {
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
        category,
    };

    try {
        await db.product.create({
            data: product,
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Could not add product",
            status: "error",
        });
    }

    return NextResponse.json({
        msg: "Product added successfully",
        status: "success",
    });
}
