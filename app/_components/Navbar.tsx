import Logo from "@/components/Logo"

import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex min-h-14 items-center sm:justify-around justify-between mx-2 bg-transparent">
      <Logo />
      <div className="hidden gap-5 sm:block">
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

      <div className="hidden sm:block space-x-5">
        <Link href="/login">
          <Button variant={"link"}>Login</Button>
        </Link>
        <Link href="/register">
          <Button variant={"outline"}>Register</Button>
        </Link>
      </div>

      {/* Small Screen Navbar */}
      <div className="block sm:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Image src="/menu.svg" alt="menu" width={20} height={20} />
            </MenubarTrigger>
            <MenubarContent >
              <Link href="/"><MenubarItem className="hover:bg-slate-200">Home</MenubarItem></Link>
              <Link href="/items"><MenubarItem className="hover:bg-slate-200">Items</MenubarItem></Link>
              <Link href="/about"><MenubarItem className="hover:bg-slate-200">About Us</MenubarItem></Link>
              <Link href="/contact"><MenubarItem className="hover:bg-slate-200">Contact Us</MenubarItem></Link>
              <MenubarSeparator className="bg-slate-300" />
              <Link href="/login"><MenubarItem className="hover:bg-slate-200">Login</MenubarItem></Link>
              <Link href="/register"><MenubarItem className="hover:bg-slate-200">Register</MenubarItem></Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

      </div>

    </div>
  )
}

export default Navbar