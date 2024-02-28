import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
    let response = {};

    try {
        const products = await db.product.findMany();
        response = { products };
    } catch (error: any) {
        response = { error: error.message };
    }

    return NextResponse.json(response);
}
