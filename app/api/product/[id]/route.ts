import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db"
import checkAdmin from "@/lib/checkAdmin";

// Get specific product
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id
    let response = {}

    try {
        const product = await db.product.findUnique({
            where: {
                id: id
            }
        });
        response = {product: product, msg: "Product fetched successfully", status: "success"};
    } catch (error : any) {
        response = {error: error.message, msg: "Could not fetch product", status: "error"};
    }


    return NextResponse.json(response);
}

// update product
export async function PUT(request: NextRequest) {
    return NextResponse.json({
        msg: "update product",
    });
}

// remove product
export async function DELETE(request: NextRequest) {
    return NextResponse.json({
        msg: "remove product",
    });
}