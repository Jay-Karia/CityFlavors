import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"

import loginSchema from "./schemas/loginSchema"
import { getUserFromEmail } from "./lib/getUser";
import bcrypt from "bcryptjs"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);
        if (validatedData.success) {
          const { email, password } = validatedData.data

          const existingUser = await getUserFromEmail(email)
          if (!existingUser || !existingUser.password) return null;

          const passwordMatch = await bcrypt.compare(password, existingUser.password);
          if (passwordMatch) return existingUser;

        }
        return null;
      }
    }),
  ],
} satisfies NextAuthConfig