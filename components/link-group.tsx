import Link from 'next/link'
import Typography from './typography'

type Props = {
  headerText: string,
  links: string[],
  hrefs: string[]
}

const LinkGroup = ({ headerText, links, hrefs }: Props) => {
  return (
    <div>
      <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
        {headerText}
      </h4>
      <div className="flex flex-col space-y-1 mt-1">
        {links.map((link, index) => (
          <div key={index} className="hover:underline-offset-4 hover:underline cursor-pointer">
            <Link href={hrefs[index]}>
              <p className="text-sm">
                {link}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkGroup