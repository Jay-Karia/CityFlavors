import { Button } from "../ui/button"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const OAuthSocial = () => {
  return (
    <div className='flex justify-between w-full space-x-5'>
        <Button type="button" variant={"outline"} size={"lg"} className="w-full">
            <FcGoogle />
        </Button>
        <Button type="button" variant={"outline"} size={"lg"} className="w-full">
            <FaGithub />
        </Button>
    </div>
  )
}

export default OAuthSocial