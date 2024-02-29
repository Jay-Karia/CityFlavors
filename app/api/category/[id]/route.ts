import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";

// Get specific category by id
export async function GET({ params }: { params: { id: string } }) {
    let response = {};
    try {
        const category = await db.category.findUnique({
            where: { id: params.id },
        });
        response = { category, msg: "Category fetched successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not fetch category", status: "error" };
    }

    return NextResponse.json(response);
}

// Update specific category by id
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    let response = {};
    const { name } = await request.json();
    const isAdmin = await checkAdmin(request.headers.get("x-user-id"));

    if (!isAdmin) {
        response = { msg: "You are not authorized to update a category", status: "error" };
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
        const category = await db.category.update({
            where: { id: params.id },
            data: data,
        });
        response = { category, msg: "Category updated successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not update category", status: "error" };
    }

    return NextResponse.json(response);
}

// Remove specific category by id
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    let response = {};
    const isAdmin = await checkAdmin(request.headers.get("x-user-id"));

    if (!isAdmin) {
        response = { msg: "You are not authorized to update a category", status: "error" };
        return NextResponse.json(response);
    }
    try {
        const category = await db.category.delete({
            where: { id: params.id },
        });
        response = { category, msg: "Category deleted successfully", status: "success" };
    } catch (error: any) {
        response = { error: error.message, msg: "Could not delete category", status: "error" };
    }

    return NextResponse.json(response);
}