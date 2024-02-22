import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {
  headerText: string,
  links: string[],
  hrefs: string[],
  horizontal?: boolean,
  variant?: "link" | "button",
  className?: string,
}

const LinkGroup = ({ headerText, links, hrefs, horizontal = false, variant = "link", className = "" }: Props) => {
  return (
    <div className={className}>
      <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
        {headerText}
      </h4>
      <div className={cn((!horizontal ? "flex-col space-y-1 mt-1" : "") + " flex")}>
        {links.map((link, index) => (
          <div key={index} className="hover:underline-offset-4 hover:underline cursor-pointer">
            {variant === "button" ? (
              <Link key={index} href={hrefs[index]}>
              <Button variant="link" >
                {link}
              </Button>
            </Link>) : <Link href={hrefs[index]}>
              <p className="text-sm">
                {link}
              </p>
            </Link>
              }
          </div>
        ))}
      </div>
    </div>

  )
}

export default LinkGroup