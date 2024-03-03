import authConfig from "@/auth.config"
import NextAuth from "next-auth"

import { publicRoutes, authRoutes, authPrefix, DEFAULT_LOGIN_REDIRECT } from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(authPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute)
        return;

    if (isAuthRoute) {
        if (isLoggedIn)
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        return
    }

    if (!isLoggedIn && !isPublicRoute)
        return Response.redirect(new URL("/login", nextUrl))

    return;

})

// Matcher to invoke all the paths except next static and public routes
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}