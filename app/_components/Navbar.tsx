import Logo from "@/components/Logo"

import { Button } from "@/components/ui/button"

import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex min-h-14 items-center justify-around bg-transparent">

      <Logo />

      <div className="flex gap-5">

        <Link href="/">
          <Button variant={"link"}>Home</Button>
        </Link>

        <Link href="/items">
          <Button variant={"link"}>Items</Button>
        </Link>

        <Link href="/about">
          <Button variant={"link"}>About Us</Button>
        </Link>

        <Link href="/contact">
          <Button variant={"link"}>Contact Us</Button>
        </Link>

      </div>

      <div className="flex space-x-5">

        <Link href="/login">
          <Button variant={"link"}>Login</Button>
        </Link>
        <Link href="/register">
          <Button variant={"outline"}>Register</Button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar