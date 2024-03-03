"use server"

import { z } from "zod"
import registerSchema from "@/schemas/registerSchema"
import db from "@/lib/db"
import bcrpyt from "bcryptjs"
import getUserFromEmail from "@/lib/getUserFromEmail"

export const register = async (values: z.infer<typeof registerSchema>) => {
    // [x] create database models
    // [x] check for existing user
    // [x] hash password
    // [x] create user in database
    // [ ] build api routes to get users from database

    const validatedData = registerSchema.parse(values)

    if (!validatedData) {
        return {msg: "Invalid fields", status: "error"}
    }

    const existingUser = await getUserFromEmail(validatedData.email);
    if (existingUser) {
        return {msg: "User already exists", status: "error"}
    }

    const hashedPassword = await bcrpyt.hash(validatedData.password, 10);
    await db.user.create({
        data: {
            name: validatedData.name,
            email: validatedData.email,
            password: hashedPassword
        }
    })

    // TODO: Send email verification token

    return {msg: "Email sent", status: "success"}

}