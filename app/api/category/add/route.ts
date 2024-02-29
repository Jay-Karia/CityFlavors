import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import checkAdmin from "@/lib/checkAdmin";
import checkSlugValidity from "@/lib/checkSlugValidity";

// Add new category
export async function POST(request: NextRequest) {

    let { name, slug } = await request.json();
    let response = {};
    const isAdmin = await checkAdmin(request.headers.get("x-user-id"));

    if (!isAdmin) {
        response = { msg: "You are not authorized to add a category", status: "error" };
        return NextResponse.json(response);
    }

    // check the parameters
    if (!name || !slug) {
        response = { msg: "Parameters are required", status: "error" };
        return NextResponse.json(response);
    }
    slug = slug.trim().replace(/ /g, "-");
    // check the validity of the category slug
    const slugValidity = await checkSlugValidity(slug);
    if (!slugValidity) {
        return NextResponse.json({
            msg: "Invalid slug",
            status: "error",
        });
    }

    const data = {
        name: name,
        slug: slug,
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