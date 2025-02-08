import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password, name} = body;

    if (!email || !password || !name ) {
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
            .from("ngo")
            .insert({
                name: name,
                email: email,
                id: data?.user?.id,
            })
            .single();

        if (userError) {
            console.error("Supabase sign-up error:", userError);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 200 });

    } catch (err) {
        console.error("General error in sign-up route:", err);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}