import { NextRequest, NextResponse } from "next/server";

// Get specific product
export async function GET(request: NextRequest) {
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