import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"

import Image from "next/image"
import Link from "next/link"

type Props = {
    trigger: React.ReactNode
    contents01: string[]
    contents02: string[]
}

const Menu = ({ trigger, contents01, contents02 }: Props) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    {trigger}
                </MenubarTrigger>
                <MenubarContent >
                    {contents01.map((content, index) => (
                        <Link href={`/${content.toLowerCase()}`} key={index}>
                            <MenubarItem className="hover:bg-slate-200">{content}</MenubarItem>
                        </Link>
                    ))}
                    <MenubarSeparator className="bg-slate-300" />
                    {contents02.map((content, index) => (
                        <Link href={`/${content.toLowerCase()}`} key={index}>
                            <MenubarItem className="hover:bg-slate-200">{content}</MenubarItem>
                        </Link>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

export default Menu