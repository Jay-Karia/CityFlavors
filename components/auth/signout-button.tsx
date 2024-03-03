import React from 'react'
import { signOut } from '@/auth'

const SignOutButton = () => {  
  return (
    <form action={async ()=> {
      "use server"
      await signOut()
    }}>
      <button>
        Sign Out
      </button>
    </form>
  )
}

export default SignOutButton