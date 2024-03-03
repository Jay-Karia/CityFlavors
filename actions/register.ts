"use server"

import { z } from "zod"
import registerSchema from "@/schemas/registerSchema"

export const register = async (values: z.infer<typeof registerSchema>) => {
    // [ ] create database models
    // [ ] hash password
    // [ ] check for existing user
    // [ ] create user in database
    // [ ] send email to user
    // [ ] build api routes to get from database

    const validatedData = registerSchema.parse(values)

    if (!validatedData) {
        return {msg: "Invalid fields", status: "error"}
    }

    return {msg: "Email sent", status: "success"}

}