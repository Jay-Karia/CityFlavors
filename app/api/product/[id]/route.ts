import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db"
import checkAdmin from "@/lib/checkAdmin";

// Get specific product
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    console.log(params.id)

    return NextResponse.json({
        msg: "Get specific product",
    });
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