import { z } from "zod"

const contactSchema = z.object({
    firstName: z.string().min(1, {message: "Name is required"}),
    lastName: z.string().min(1, {message: "Name is required"}),
    email: z.string().email({message: "Invalid email"}).min(1, {message: "Email is required"}),
    phone: z.string(),
    message: z.string().min(1, {message: "Message is required"}),
});

export default contactSchema