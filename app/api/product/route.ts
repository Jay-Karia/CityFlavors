import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import productSchema from "@/schemas/productSchema";

// Get all Products
export async function GET(request: NextRequest) {
    return NextResponse.json({
        msg: "Get all products",
    });
}