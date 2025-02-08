import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse request body
        const { food_id, ngo_id } = body;

        // Validate input
        if (!food_id || !ngo_id) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        // Update food data in DB
        const { data: foodItem, error } = await supabase
            .from("food")
            .update({ status: true,
                ngo_id: ngo_id
            })
            .eq("id", food_id)
            .select()
            .single();

        if (error) {
            console.error("Error updating food item:", error);
            return NextResponse.json({ error: "Error updating food item" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: foodItem }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
