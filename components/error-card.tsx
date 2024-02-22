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
            <h1 className="text-6xl font-bold tracking-tight">
                {statusCode}
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {heading}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {subText}
            </p>
            <div className="mt-10">
                <Link href="/">
                    <Button variant={"colored"}>
                        <div className="flex gap-2">
                            <Image src="/arrow-left.svg" alt="home" width={20} height={20} />
                            Return Home
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorCard