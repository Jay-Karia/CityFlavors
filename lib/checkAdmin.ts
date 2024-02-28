import db from "@/lib/db";

const checkAdmin = async (id: string | null) => {
    let isAdmin = false;
    try {
        const user = await db.user.findUnique({
            where: {
                id: id?.toString(),
            },
        });
        if (user?.isAdmin === true) {
            isAdmin = true;
        }
    } catch {
        console.log("some error occurred")
    }
    return isAdmin;
};

export default checkAdmin;
