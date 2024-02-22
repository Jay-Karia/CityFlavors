import ErrorCard from "@/components/error-page"

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