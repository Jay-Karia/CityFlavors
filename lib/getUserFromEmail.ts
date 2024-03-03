import db from "@/lib/db"

const getUserFromEmail = async (email: string) => {
    return await db.user.findFirst({
        where: {
            email
        }
    })
}

export default getUserFromEmail;