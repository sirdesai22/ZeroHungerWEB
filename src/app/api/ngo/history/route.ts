import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse request body
        const { user_id } = body;

        // Validate input
        if (!user_id) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        // Fetch food data from DB
        const { data: foodItems, error } = await supabase
            .from("food")
            .select()
            .eq("ngo_id",user_id)

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
