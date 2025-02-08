import { NextRequest, NextResponse } from "next/server";

// GET handler for basic testing
export async function GET() {
    return NextResponse.json({ message: "Hello World!" }, { status: 200 });
}