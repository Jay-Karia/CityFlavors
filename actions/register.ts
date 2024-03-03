"use server"

import { z } from "zod"
import registerSchema from "@/schemas/registerSchema"
import db from "@/lib/db"
import bcrpyt from "bcryptjs"
import { getUserFromEmail } from "@/lib/getUser"

export const register = async (values: z.infer<typeof registerSchema>) => {
    const validatedData = registerSchema.parse(values)

    if (!validatedData) {
        return { msg: "Invalid fields", status: "error" }
    }

    const existingUser = await getUserFromEmail(validatedData.email);
    if (existingUser) {
        return { msg: "User already exists", status: "error" }
    }

    const hashedPassword = await bcrpyt.hash(validatedData.password, 10);
    await db.user.create({
        data: {
            name: validatedData.name,
            email: validatedData.email,
            password: hashedPassword
        }
    })

    return { msg: "User successfully registered, you can now log in to your account", status: "success" }

}