import db from "@/lib/db"

export const getTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {
                token: token
            }
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export const getTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                identifier: email
            }
        });

        return verificationToken;
    } catch {
        return null;
    }
}