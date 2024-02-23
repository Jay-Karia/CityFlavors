import Logo from "@/components/Logo";
import Menu from "@/components/menu";
import LinkGroup from "@/components/link-group";
import { Button } from "@/components/ui/button";
import { CiMenuBurger } from "react-icons/ci";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex min-h-14 items-center sm:justify-around justify-between mx-2 bg-gray-50">
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
        <Button variant={"link"} asChild><Link href="/login">Login</Link></Button>
        <Button variant={"outline"} asChild><Link href="/register">Register</Link></Button>
      </div>

      <div className="block sm:hidden">
        <Menu
          trigger={<CiMenuBurger size={15}/>}
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
