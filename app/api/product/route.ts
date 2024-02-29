import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
    let response = {};
    const category = request.headers.get("x-category");

    // Filter products by category
    if (category) {
        try {
            const products = (await db.product.findMany()).filter(
                (product) => product.categorySlug === category
            );
            response = { products, msg: "Products fetched successfully", status: "success" };
        } catch (error: any) {
            response = { error: error.message, msg: "Could not fetch products", status: "error" };
        }
        return NextResponse.json(response);
    } else {
        try {
            const products = await db.product.findMany();
            response = { products, msg: "All products fetched successfully", status: "success" };
        } catch (error: any) {
            response = { error: error.message, msg: "Could not fetch products", status: "error" };
        }
    }


    return NextResponse.json(response);
}
