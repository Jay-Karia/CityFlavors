"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import ErrorCard from "@/components/error-card";

const DummyPage = () => {
    return (
        <>
            <ErrorCard
                statusCode={999}
                heading="Dummy Page"
                subText="Sorry for the inconvenience, but this page is not available."
            />
        </>
    )
}

export default DummyPage