import ErrorCard from "@/components/error-card"
import Image from "next/image"

const NotFound = () => {
  return (
    <>
        <ErrorCard
            statusCode={404}
            heading="Page Not Found"
            subText="Sorry, but the page you are looking for does not exist."
        />
    </>
  )
}

export default NotFound