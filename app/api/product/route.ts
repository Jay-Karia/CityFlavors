import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
    let response = {};
    try {
        const products = await db.product.findMany();
        response = { products, msg: "All products fetched successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not fetch products", status: "error" };
    }

    return NextResponse.json(response);
}
