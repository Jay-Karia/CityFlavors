import AboutCard from "@/components/about-card"
import MiscCard from "@/app/_components/MiscCard"

const AboutPage = () => {
  return (
    <div className="h-full flex flex-col pt-5 items-center">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        About Us
      </h2>
      <p className="text-sm text-muted-foreground mt-1">Get to know more about us!</p>
      <div className="mt-10 mb-20 w-3/4">
        <MiscCard image={"https://img.freepik.com/free-vector/customer-support-illustration_23-2148890147.jpg?t=st=1708716287~exp=1708719887~hmac=d10c83b93a4b47f27f0917632ef0ef42c9df7473f7623e24f494ff7670358540&w=826"} content={<AboutCard />} />
      </div>
    </div>
  )
}

export default AboutPage