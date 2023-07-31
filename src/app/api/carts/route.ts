import { NextResponse, NextRequest } from "next/server";
import cards from "./cards.json";


export async function GET(request: NextRequest): Promise<NextResponse> {
     const searchParams = new URL(request.url).searchParams;

     const page = searchParams.get("page");
     const query  = searchParams.get("query");
     const order = searchParams.get("order");
    
    const data  = Array.from({ length: 50 }, (v, i) => {return {...cards[i % 4], id: i}})
    return NextResponse.json({
        ok: true,
        data: data
    })
}