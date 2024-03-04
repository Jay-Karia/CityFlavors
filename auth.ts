import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "@/lib/db"
import { getUserFromId } from "./lib/getUser"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        async signIn({ user }) {
            if (user.id) {
                const currentUser = await getUserFromId(user.id);
                if (!currentUser || !currentUser.emailVerified) {
                    return false;
                }
            }

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as "ADMIN" | "USER";
            }

            return session;
        },
        async jwt({ token }) {

            if (!token.sub) return token;

            const currentUser = await getUserFromId(token.sub);
            if (!currentUser) return token;

            token.role = currentUser.role;

            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    ...authConfig
})