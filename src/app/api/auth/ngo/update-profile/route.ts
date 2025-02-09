import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { user_id, phno, address } = body;

    if (!address) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {

        const { data: user, error: userError } = await supabase
            .from("ngo")
            .update({
                phno: phno?phno:"007",
            })
            .eq("id", user_id)
            .single();

        if (userError) {
            console.error("Supabase sign-up error:", userError);
            return NextResponse.json({ userError }, { status: 500 });
        }

        const { data: addressData, error: addressError } = await supabase
            .from("address")
            .insert({
                user_id: user_id,
                house_no: address?.house_no,
                street: address?.street,
                city: address?.city,
                state: address?.state,
                location: address?.location,
                pincode: address?.pincode
            })
            .single();

        if (addressError) {
            console.error("Supabase sign-up error:", addressError);
            return NextResponse.json({ addressError }, { status: 500 });
        }

        return NextResponse.json({ user }, { status: 200 });

    } catch (err) {
        console.error("General error in sign-up route:", err);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}