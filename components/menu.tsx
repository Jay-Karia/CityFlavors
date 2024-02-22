import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";

type Props = {
    trigger: React.ReactNode;
    contents01: string[];
    hrefs01: string[];
    contents02: string[];
    hrefs02: string[];
};

const Menu = ({ trigger, contents01, hrefs01, contents02, hrefs02 }: Props) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>{trigger}</MenubarTrigger>
                <MenubarContent>
                    {contents01.map((content, index) => (
                        <Link href={hrefs01[index]} key={index}>
                            <MenubarItem className="hover:bg-slate-200">
                                {content}
                            </MenubarItem>
                        </Link>
                    ))}
                    <MenubarSeparator className="bg-slate-300" />
                    {contents02.map((content, index) => (
                        <Link href={hrefs02[index]} key={index}>
                            <MenubarItem className="hover:bg-slate-200">
                                {content}
                            </MenubarItem>
                        </Link>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default Menu;
