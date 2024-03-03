import React from 'react'
import { signOut } from '@/auth'
import { Button } from '../ui/button'

const SignOutButton = () => {
  return (
    <form className="flex items-center" action={async () => {
      "use server"
      await signOut()
    }}>
      <Button variant={"link"} >Logout</Button>
    </form>
  )
}

export default SignOutButton