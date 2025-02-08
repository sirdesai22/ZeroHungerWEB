export const runtime = "nodejs";

import { supabase } from "@/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try { // Wrap in a try...catch for broader errors
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Supabase sign-in error:", error); // Log the full error object!
            return NextResponse.json({ error }, { status: 500 });
        }


        return NextResponse.json({ data }, { status: 200 });

    } catch (err) {
        console.error("General error in sign-up route:", err); // Catch and log any other errors
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 }); // More generic message for the client
    }
}