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
        <MiscCard image={"/contact.png"} content={<ContactForm/>}/>
      </div>
    </main>
  )
}

export default ContactPage