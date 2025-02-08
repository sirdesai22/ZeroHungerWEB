import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password, name, phno, type, gstin, address } = body;

    if (!email || !password || !name || !phno || !type || !gstin || !address) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Supabase sign-up error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        const { data: user, error: userError } = await supabase
            .from("users")
            .insert({
                name: name,
                email: email,
                phno: phno,
                type: type,
                gstin: gstin,
                id: data?.user?.id
            })
            .single();

        if (userError) {
            console.error("Supabase sign-up error:", userError);
            return NextResponse.json({ error }, { status: 500 });
        }

        const { data: addressData, error: addressError } = await supabase
            .from("address")
            .insert({
                user_id: data?.user?.id,
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
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 200 });

    } catch (err) {
        console.error("General error in sign-up route:", err);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}