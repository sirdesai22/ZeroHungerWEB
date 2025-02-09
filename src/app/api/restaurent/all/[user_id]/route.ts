import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(
    req: NextRequest,
    { params }: { params: { user_id: string } }
) {
    const { user_id } = params;
    console.log(user_id);
    try {
        const { data:userData, error: userError } = await supabase
            .from("users")
            .select()
            .eq("id", user_id)
            .single();

        if (userError) {
            console.error("Error fetching user data:", userError);
            return NextResponse.json({ error: "Error fetching user data" }, { status: 500 });
        }

        const { data:foodData, error: foodError } = await supabase
            .from("food")
            .select()
            .eq("user_id", user_id)
            .single();
            
        if (foodError) {
            console.error("Error fetching food data:", foodError);
            return NextResponse.json({ error: "Error fetching food data" }, { status: 500 });
        }

        const { data:addressData, error: addressError } = await supabase
            .from("address")
            .select()
            .eq("user_id", user_id)
            .single();

        if (addressError) {
            console.error("Error fetching address data:", addressError);
            return NextResponse.json({ error: "Error fetching address data" }, { status: 500 });
        }

        return NextResponse.json({ success: true, userData, foodData, addressData }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
