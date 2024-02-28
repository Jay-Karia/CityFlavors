import { NextRequest, NextResponse } from "next/server";

// Add product
export async function POST(request: NextRequest) {
    return NextResponse.json({
        msg: "add product",
    });
}