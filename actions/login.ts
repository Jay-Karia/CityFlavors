"use server"

import { z } from "zod"
import loginSchema from "@/schemas/loginSchema"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth";
import { getUserFromEmail } from "@/lib/getUser"
import generateVerificationCode from "@/lib/generateVerificationCode"

export const login = async (values: z.infer<typeof loginSchema>) => {

    const validatedData = loginSchema.safeParse(values)

    if (!validatedData.success) {
        return { msg: "Invalid fields", status: "error" }
    }

    const { email, password } = validatedData.data

    const existingUser = await getUserFromEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { msg: "Email does not exists", status: "error" }
    }

    if (!existingUser.emailVerified) {
        const verificationCode = await generateVerificationCode(existingUser.email);

        return { msg: "Email not verified, verification code sent to your email", status: "error"}
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        return { msg: "Successfully signed in!!", status: "success" }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { msg: "Invalid credentials", status: "error" };
                case "CredentialsSignin":
                    throw error;
                default:
                    return { msg: "Something went wrong", status: "error" };
            }
        }

        throw error;
    }
}