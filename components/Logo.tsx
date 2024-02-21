import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex sm:space-x-5 space-x-2 items-center">
        <Image src="/building.png" alt="logo" width={25} height={5} className="sm:w-7" />
        <h3 className="scroll-m-20 sm:text-2xl font-normal tracking-tight text-xl">
          CityFlavors
        </h3>
      </div>
    </Link>
  )
}

export default Logo