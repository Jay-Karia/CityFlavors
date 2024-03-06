import { getTokenByEmail } from './verification-token';
import {v4 as uuidv4} from 'uuid';
import db from "@/lib/db"

const generateVerificationCode = async (email: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getTokenByEmail(email);

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            token,
            expires,
            identifier: email,
        }
    })

    return verificationToken;
}

export default generateVerificationCode;