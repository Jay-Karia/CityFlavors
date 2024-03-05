"use client"

import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const OAuthSocial = () => {

  const handleClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className='flex sm:flex-row justify-between w-full sm:gap-5 flex-col gap-5'>
      <Button type="button" variant={"outline"} size={"lg"} className="w-full" aria-label="Google OAuth" onClick={() => { handleClick("google") }}>
        <FcGoogle />
      </Button>
      <Button type="button" variant={"outline"} size={"lg"} className="w-full" aria-label="Github OAuth" onClick={() => { handleClick("github") }}>
        <FaGithub />
      </Button>
    </div>
  )
}

export default OAuthSocial