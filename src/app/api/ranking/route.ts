import { NextRequest, NextResponse } from "next/server";  
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: NextRequest) {
    try {
        const { data: UserRankingData, error: UserRankingError } = await supabase
            .from("users")
            .select("id, name, points")
            .order("points", { ascending: false });

        if (UserRankingError) {
            console.error("Error fetching user ranking data:", UserRankingError);
            return NextResponse.json({ error: "Error fetching user ranking data" }, { status: 500 });
        }

        const { data: NgoRankingData, error: NgoRankingError } = await supabase
            .from("ngo")
            .select("id, name, points")
            .order("points", { ascending: false });

        if (NgoRankingError) {
            console.error("Error fetching NGO ranking data:", NgoRankingError);
            return NextResponse.json({ error: "Error fetching NGO ranking data" }, { status: 500 });
        }

        const combinedRanking = [
            ...UserRankingData.map((data, index) => ({ ...data, type: "user", rank: index + 1 })),
            ...NgoRankingData.map((data, index) => ({ ...data, type: "ngo", rank: index + 1 }))
        ];

        combinedRanking.sort((a, b) => b.points - a.points);

        return NextResponse.json({ success: true, data: combinedRanking }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
