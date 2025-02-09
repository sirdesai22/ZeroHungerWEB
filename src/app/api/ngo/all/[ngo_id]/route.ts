import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(
    req: NextRequest,
    { params }: { params: { ngo_id: string } }
) {
    const { ngo_id } = params;
    console.log(ngo_id);
    try {
        const { data:userData, error: userError } = await supabase
            .from("ngo")
            .select()
            .eq("id", ngo_id)
            .select()
            .single();
        if (userError) {
            console.error("Error fetching user data:", userError);
            return NextResponse.json({ error: "Error fetching user data" }, { status: 500 });
        }

        const { data:foodHistory, error: foodError } = await supabase
            .from("food")
            .select()
            .eq("ngo_id", ngo_id)
        if (foodError) {
            console.error("Error fetching food data:", foodError);
            return NextResponse.json({ error: "Error fetching food data" }, { status: 500 });
        }

        const { data:addressData, error: addressError } = await supabase
            .from("address")
            .select()
            .eq("user_id", ngo_id)
            
        if (addressError) {
            console.error("Error fetching address data:", addressError);
            return NextResponse.json({ error: "Error fetching address data" }, { status: 500 });
        }

        return NextResponse.json({ success: true, userData, foodHistory, addressData }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
