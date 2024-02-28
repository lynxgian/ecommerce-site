import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    console.log(req.nextUrl.pathname)
    if(req.nextUrl.pathname.startsWith('/user') && req.cookies.size <= 0) {
        req.nextUrl.pathname = '/'
        return NextResponse.redirect(req.nextUrl)
    }
}