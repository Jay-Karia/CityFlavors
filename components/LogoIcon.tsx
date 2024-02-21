import Image from "next/image"

type Props = {
  height?: number
  width?: number
}

const LogoIcon = ({height = 5, width = 25}: Props) => {
  return (
    <Image src="/building.png" alt="logo" width={width} height={height} className="sm:w-7" />
  )
}

export default LogoIcon