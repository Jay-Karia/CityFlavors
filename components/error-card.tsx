import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

type Props = {
    statusCode: number;
    heading: string;
    subText: string;
};

const ErrorCard = ({ statusCode, heading, subText }: Props) => {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="xl:text-6xl text-5xl font-bold tracking-tight">
                {statusCode}
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 xl:text-3xl text-2xl font-semibold tracking-tight first:mt-0">
                {heading}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mx-5 text-center">
                {subText}
            </p>
            <div className="mt-10">
                <Link href="/">
                    <Button variant={"colored"} className="sm:h-9 sm:px-4 sm:py-2 sm:text-sm h-8 rounded-md px-3 text-xs">
                        <div className="flex gap-2">
                            <Image src="/arrow-left.svg" alt="home" width={15} height={15} />
                            Return Home
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorCard