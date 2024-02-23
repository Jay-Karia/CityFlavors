import ContactForm from "@/components/contact-form"
import MiscCard from "@/app/_components/MiscCard"

const ContactPage = () => {
  return (
    <main className="h-full flex flex-col items-center">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Contact Us
      </h2>
      <p className="text-sm text-muted-foreground mt-1">Get in touch with us!</p>
      <div className="mt-10 mb-20 w-3/4">
        <MiscCard image={"https://img.freepik.com/free-vector/customer-support-illustration_23-2148890148.jpg?t=st=1708716133~exp=1708719733~hmac=36123598f5ffb696853a4de09f8d3e0b95788085f14c3714924b97c4e1f188b9&w=826"} content={<ContactForm/>}/>
      </div>
    </main>
  )
}

export default ContactPage