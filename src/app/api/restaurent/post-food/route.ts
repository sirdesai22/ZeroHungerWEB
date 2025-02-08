import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse request body
        const { restaurantId, available, name, quantity, veg } = body;

        // Validate input
        if (!restaurantId || typeof available !== "boolean" || typeof quantity !== "number" || typeof veg !== "boolean") {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        // Insert food data from DB
        const { data: food, error } = await supabase
            .from("food")
            .insert({
                    restaurant_id: restaurantId,
                    available: available,
                    name: name,
                    quantity: quantity,
                    veg: veg
                },
            );

        if (error) {
            console.error("Error fetching food items:", error);
            return NextResponse.json({ error: "Error fetching food items" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: food }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
