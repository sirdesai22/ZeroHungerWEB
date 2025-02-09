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
        const { data: foodItem, error: foodError } = await supabase
            .from("food")
            .update({ status: true, ngo_id: ngo_id })
            .eq("id", food_id)
            .select()
            .single();

        if (foodError || !foodItem) {
            console.error("Error updating food item:", foodError);
            return NextResponse.json({ error: "Error updating food item" }, { status: 500 });
        }

        if (!foodItem.price || foodItem.quantity === 0) {
            return NextResponse.json({ error: "Invalid food item data" }, { status: 400 });
        }

        var foodPoint = (foodItem.price / foodItem.quantity) * 100;
        console.log(foodItem);

        const { data: pointsData, error: pointsError } = await supabase
            .from("ngo")
            .select("points")
            .eq("id", ngo_id)
            .single();

        // console.log("---------------------",pointsData);
        if (pointsError || !pointsData) {
            console.error("Error fetching ngo points:", pointsError);
            return NextResponse.json({ error: "Error fetching ngo points" }, { status: 500 });
        }

        const { data: ngoData, error: ngoError } = await supabase
            .from("ngo")
            .update({ points: pointsData.points + foodPoint })
            .eq("id", ngo_id)
            .select()
            .single();

        console.log("---------------------",ngoData.points);

        if (ngoError || !ngoData) {
            console.error("Error updating ngo points:", ngoError);
            return NextResponse.json({ error: "Error updating ngo points" }, { status: 500 });
        }

        const { data: foodPointsData, error: foodPointsError } = await supabase
            .from("users")
            .select("points")
            .eq("id", foodItem.user_id)
            .single();

        console.log("---------------------",foodItem.user_id);

        if (foodPointsError || !foodPointsData) {
            console.error("Error fetching user points:", foodPointsError);
            return NextResponse.json({ error: "Error fetching user points" }, { status: 500 });
        }

        const { data: foodData, error: foodUpdateError } = await supabase
            .from("users")
            .update({ points: foodPointsData.points + foodPoint })
            .eq("id", foodItem.user_id)
            .select()
            .single();
        
        console.log("---------------------",foodData);


        if (foodUpdateError || !foodData) {
            console.error("Error updating user points:", foodUpdateError);
            return NextResponse.json({ error: "Error updating user points" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: foodItem }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
