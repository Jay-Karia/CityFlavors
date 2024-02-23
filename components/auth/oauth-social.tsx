import { Button } from "../ui/button"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const OAuthSocial = () => {
  return (
    <div className='flex sm:flex-row justify-between w-full sm:gap-5 flex-col gap-5'>
        <Button type="button" variant={"outline"} size={"lg"} className="w-full" aria-label="Google OAuth">
            <FcGoogle />
        </Button>
        <Button type="button" variant={"outline"} size={"lg"} className="w-full" aria-label="Github OAuth">
            <FaGithub />
        </Button>
    </div>
  )
}

export default OAuthSocial