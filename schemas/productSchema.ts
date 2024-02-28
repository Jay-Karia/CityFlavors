import { z } from "zod"

const productSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    description: z.string(),
    price: z.number().min(1, {message: "Minimum price should be 1"}),
    image: z.string().includes("https://", {message: "Provide a valid image url"}),
    category: z.string().min(1, {message: "Category is required"}),
    isAdmin: z.boolean().optional(),
})

export default productSchema;