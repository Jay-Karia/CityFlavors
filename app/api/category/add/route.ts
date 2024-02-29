import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";

// Add new category
export async function POST(request: NextRequest) {
    let response = {};
    const { name } = await request.json();
    const isAdmin = await checkAdmin(request.headers.get("x-user-id"));

    if (!isAdmin) {
        response = { msg: "You are not authorized to add a category", status: "error" };
        return NextResponse.json(response);
    }

    if (!name) {
        response = { msg: "Name is required", status: "error" };
        return NextResponse.json(response);
    }

    const data = {
        name,
    }

    try {
        const category = await db.category.create({
            data: data,
        });
        response = { category, msg: "Category added successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not add category", status: "error" };
    }

    return NextResponse.json(response);
}