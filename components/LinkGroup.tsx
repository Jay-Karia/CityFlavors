import Link from 'next/link'

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
      <ul className="flex flex-col space-y-1 mt-1">
        {links.map((link, index) => (
          <div key={index} className="hover:underline-offset-4 hover:underline">
            <Link href={hrefs[index]}>
              <li className="cursor-pointer">
                <p className="text-sm ">
                  {link}
                </p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default LinkGroup