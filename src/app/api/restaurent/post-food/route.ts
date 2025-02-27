import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";


// GET handler for basic testing
export async function GET() {
    return NextResponse.json({ message: "Hello World!" }, { status: 200 });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse request body
        const { user_id, status, name, quantity, price, veg, image } = body;

        // Validate input
        if (!user_id || typeof status !== "boolean" || typeof quantity !== "number" || typeof veg !== "boolean") {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        // Insert food data from DB
        const { data: food, error } = await supabase
            .from("food")
            .insert({
                user_id: user_id,
                status: status,
                name: name,
                quantity: quantity,
                veg: veg,
                price: parseInt((price / 0.02).toString())
            }).single();

        if (error) {
            console.error("Error fetching food items:", error);
            return NextResponse.json({ error: "Error fetching food items" }, { status: 500 });
        }

        // const { data, error: storageError } = await supabase
        //     .storage
        //     .from('food-images')
        //     .upload(`${(food as any)?.id}.png`, image, {
        //         cacheControl: '3600',
        //         upsert: false
        //     })

        // if (storageError) {
        //     console.error("Error uploading avatar:", storageError);
        //     return NextResponse.json({ error: "Error uploading avatar" }, { status: 500 });
        // }

        return NextResponse.json({ success: true, data: food }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
