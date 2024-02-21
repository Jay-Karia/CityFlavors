import Link from "next/link"
import LogoIcon from "./LogoIcon"

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex sm:space-x-5 space-x-2 items-center">
        <LogoIcon />
        <h3 className="scroll-m-20 sm:text-2xl font-normal tracking-tight text-xl">
          CityFlavors
        </h3>
      </div>
    </Link>
  )
}

export default Logo