import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
    let response = {};
    try {
        const categories = await db.category.findMany();
        response = { categories, msg: "All categories fetched successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not fetch categories", status: "error" };
    }

    return NextResponse.json(response);
}