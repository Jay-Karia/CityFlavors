import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// View cart items
export async function POST(request: NextRequest) {
    const { user } = await request.json();

    try {
        const cartItems = await db.cart.findMany({
            where: {
                userId: user,
            },
        });
        
        return NextResponse.json({ msg: `Cart items Loaded`, status: "success", data: cartItems });
    } catch (error) {
        return NextResponse.json({ msg: "Error fetching cart items. Please try again.", error: error, status: "error" });
    }
}
