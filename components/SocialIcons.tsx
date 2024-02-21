import Image from "next/image"
import Link from "next/link"

const SocialIcons = () => {
  return (
    <div className="flex gap-5 mt-6">
      <Link href="/dummy">
        <Image src="/instagram.svg" alt="instagram" width={20} height={20} className="cursor-pointer" />
      </Link>
      <Link href="/dummy">
        <Image src="/twitter.svg" alt="twitter" width={20} height={20} className="cursor-pointer" />
      </Link>
      <Link href="/dummy">
        <Image src="/facebook.svg" alt="facebook" width={20} height={20} className="cursor-pointer" />
      </Link>
    </div>
  )
}

export default SocialIcons