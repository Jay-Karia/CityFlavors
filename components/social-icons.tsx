import Link from "next/link"

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-5">
      <Link href="/dummy" aria-label="Instagram Account">
        <FaInstagram className="cursor-pointer" size={20}/>
      </Link>
      <Link href="/dummy" aria-label="Twitter Account">
        <FaTwitter className="cursor-pointer" size={20}/>
      </Link>
      <Link href="/dummy" aria-label="Facebook Account">
        <FaFacebook className="cursor-pointer" size={20}/>
      </Link>
    </div>
  )
}

export default SocialIcons