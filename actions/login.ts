"use server"

import { z } from "zod"
import loginSchema from "@/schemas/loginSchema"

export const login = async (values: z.infer<typeof loginSchema>) => {
    
    const validatedData = loginSchema.parse(values)

    if (!validatedData) {
        return {msg: "Invalid fields", status: "error"}
    }

    return {msg: "Email sent", status: "success"}

}