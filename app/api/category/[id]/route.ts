import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";

// Get specific category by id
export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
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
export async function PUT(request: NextRequest, {params}: { params: { id: string } }) {
    // TODO: check the validity of the category slug
    const { name, slug } = await request.json();
    const isAdmin = await checkAdmin(request.headers.get("x-user-id"));

    if (!isAdmin) {
        return NextResponse.json({
            msg: "You are not authorized to update a product",
            status: "error",
        });
    }

    if (!name || !slug) {
         return NextResponse.json({
            msg: "All fields are required",
            status: "error",
        });
    }

    const data = {
        name,
        slug
    }

    try {
        const category = await db.category.update({
            where: { id: params.id },
            data: data,
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            msg: "Could not update product",
            status: "error",
        });
    }

    return NextResponse.json({
        msg: "Product updated successfully",
        status: "success",
    });
}

// Remove specific category by id
export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {
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