import { NextRequest, NextResponse } from "next/server";
import searchHistory from "./searchHistory.json";


export const GET = async (request: NextRequest): Promise<NextResponse> => {
    return NextResponse.json({
        ok: true,
        data: searchHistory,
    })
}