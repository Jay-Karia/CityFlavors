"use client";
import ErrorCard from "@/components/error-page";

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