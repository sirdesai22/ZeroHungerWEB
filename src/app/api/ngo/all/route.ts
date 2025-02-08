import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: NextRequest) {
    try {
        const { data, error } = await supabase
            .from("ngo")
            .select()
        if (error) {
            console.error("Error fetching NGO data:", error);
            return NextResponse.json({ error: "Error fetching NGO data" }, { status: 500 });
        }
        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
