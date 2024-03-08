import { NextRequest, NextResponse } from "next/server";
import { prisma } from "./lib/services";
import { withMiddlewareAuthRequired, getSession} from "@auth0/nextjs-auth0/edge";



export const middleware = withMiddlewareAuthRequired({
     async middleware(req, res) {
        
        const sessionUser = await getSession(req, res)
        const userId: string = sessionUser?.user?.sub?.split('|')[1]
        if(sessionUser) {
            const user = await prisma.user.findUnique({
                where: {
                    email: sessionUser.user?.email
                }
            })
            if(!user) {
                await prisma.user.create({
                    data: {
                       id: userId,
                       email: sessionUser?.user?.email,
                       role: "Customer",
                       username: sessionUser?.user?.nickname,
                       name: sessionUser?.user?.name 
                    }
                })
            }

        }
        if(req.nextUrl.pathname.startsWith('/items')) {
            console.log(req.nextUrl.pathname.split('/'))
            const item = await prisma.user.findUnique({
                where: {
                    id: req.nextUrl.pathname.split('/')[1]
                }
            })

            if(!item) {
                req.nextUrl.pathname = '/404'
                return NextResponse.redirect(req.nextUrl)
            }
        }
        if(req.nextUrl.pathname.startsWith('/user')) {
            const user = await prisma.user.findFirst({
                where: {
                    id: req.nextUrl.pathname.split('/')[2]
                }
            })

            if(!user) {
                req.nextUrl.pathname = '/404'
                return NextResponse.redirect(req.nextUrl)
            }
        }
    }
})

export const config = {
    matcher: ["/protected", "/user/:user*"]
}