"use server"

import { z } from "zod"
import loginSchema from "@/schemas/loginSchema"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const login = async (values: z.infer<typeof loginSchema>) => {

    const validatedData = loginSchema.safeParse(values)

    if (!validatedData.success) {
        return { msg: "Invalid fields", status: "error" }
    }

    const { email, password } = validatedData.data

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        return { msg: "Successfully signed in!!", status: "success" }
    } catch {
        return { msg: "Could not sign in", status: "error" }
    }
}