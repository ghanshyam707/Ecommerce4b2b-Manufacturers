import { NextResponse } from "next/server"
import authorize from "./app/api/helper/server/authorize"


export async function middleware(req) {
    // console.log(req)
    const data = await authorize(req.cookies.get("authorization")?.value)
        if (data.authorize) {
            if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/login' ) {
                return NextResponse.redirect(new URL('/user', req.url))
            } else {
                const newHeaders = new Headers(req.headers)
                newHeaders.set('email',data.email)
                return NextResponse.next({
                    headers:newHeaders
                })
            }
        } else {
            if (req.nextUrl.pathname !== '/login') {
                return NextResponse.redirect(new URL('/login', req.url))
            }
        }
    
}

export const config = {
    matcher: ['/api/user/:path*', '/user/:path*','/','/login']
}