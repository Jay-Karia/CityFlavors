import Logo from "@/components/Logo";
import Menu from "@/components/menu";
import LinkGroup from "@/components/link-group";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex min-h-14 items-center sm:justify-around justify-between mx-2 bg-transparent">
      <Logo />
      <div className="hidden sm:block">
        <LinkGroup
          headerText=""
          links={["Home", "Items", "About Us", "Contact Us"]}
          hrefs={["/", "/items", "/about", "/contact"]}
          variant={"button"}
          horizontal
        />
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
        <Menu
          trigger={<Image src="/menu.svg" alt="menu" width={20} height={20} />}
          contents01={["Home", "Items", "About Us", "Contact Us"]}
          hrefs01={["/", "/items", "/about", "/contact"]}
          contents02={["Login", "Register"]}
          hrefs02={["/login", "/register"]}
        />
      </div>
    </div>
  );
};

export default Navbar;
