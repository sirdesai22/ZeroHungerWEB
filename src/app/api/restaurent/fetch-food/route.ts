import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

// GET handler for basic testing
export async function GET() {
    return NextResponse.json({ message: "Hello World!" }, { status: 200 });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse request body
        const { restaurantId, available } = body;

        // Validate input
        if (!restaurantId || typeof available !== "boolean") {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        // Fetch food data from DB
        const { data: foodItems, error } = await supabase
            .from("food")
            .select()
            .eq('restaurant_id', restaurantId) // Assuming you want to filter by restaurantId

        if (error) {
            console.error("Error fetching food items:", error);
            return NextResponse.json({ error: "Error fetching food items" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: foodItems }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
