import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { user_id, unique_key } = body;

    if (!unique_key) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {

        const { data: user, error: userError } = await supabase
            .from("ngo")
            .update({
                unique_key: unique_key,
            })
            .eq("id", user_id)
            .single();

        if (userError) {
            console.error("Supabase sign-up error:", userError);
            return NextResponse.json({ userError }, { status: 500 });
        }

        return NextResponse.json({ user }, { status: 200 });

    } catch (err) {
        console.error("General error in sign-up route:", err);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}