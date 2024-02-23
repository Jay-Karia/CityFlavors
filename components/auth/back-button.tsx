import { Button } from "../ui/button"
import Link from "next/link"

interface Props {
    authType: "login" | "register"
}

const BackButton = ({ authType }: Props) => {
    const hrefs = {
        login: "/register",
        register: "/login"
    }

    return (
        <div className="flex justify-center">
            <Button variant="link" asChild>
                <Link href={hrefs[authType]}>{hrefs[authType] === "/login" ? "Already have an account?" : "Don't have an account?"}</Link>
            </Button>
        </div>
    )
}

export default BackButton