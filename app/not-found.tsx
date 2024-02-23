import ErrorCard from "@/components/error-card"

const NotFound = () => {
  return (
    <div className="h-screen">
        <ErrorCard
            statusCode={404}
            heading="Page Not Found"
            subText="Sorry, but the page you are looking for does not exist."
        />
    </div>
  )
}

export default NotFound