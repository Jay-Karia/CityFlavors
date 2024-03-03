import db from "@/lib/db"

const getUserFromId = async (id: string) => {
    return await db.user.findFirst({
        where: {
            id
        }
    })
}

export default getUserFromId;