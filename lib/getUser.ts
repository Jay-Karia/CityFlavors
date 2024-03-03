import db from "@/lib/db"

export const getUserFromId = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            }
        })
        return user;
    } catch {
        return null
    }
}

export const getUserFromEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email
            }
        })
        return user;
    } catch {
        return null;
    }
}