"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const DummyPage = () => {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="text-6xl font-bold tracking-tight">
                999
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Dummy Page
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Sorry for the inconvenience, but this page is not available.
            </p>
            <div className="mt-10">
                <Link href="/">
                    <Button variant={"colored"}>Go to Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default DummyPage