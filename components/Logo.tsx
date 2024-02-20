import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex space-x-5 items-center">
        <Image src="/building.png" alt="logo" width={30} height={5} />
        <h3 className="scroll-m-20 text-2xl font-normal tracking-tight">
          CityFlavors
        </h3>
      </div>
    </Link>
  )
}

export default Logo