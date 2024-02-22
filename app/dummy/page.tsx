"use client";
import ErrorCard from "@/components/error-page";

const DummyPage = () => {
    return (
        <div className="h-full flex flex-col">
            <ErrorCard
                statusCode={999}
                heading="Dummy Page"
                subText="Sorry for the inconvenience, but this page is not available."
            />
        </div>
    )
}

export default DummyPage