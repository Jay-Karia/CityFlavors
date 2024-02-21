import SocialIcons from "@/components/SocialIcons"
import LinkGroup from "@/components/LinkGroup"

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full flex justify-evenly pb-10 pt-2">
      <div className="flex flex-col">
        <h3 className="scroll-m-20 sm:text-2xl font-normal tracking-tight text-xl">
          CityFlavors
        </h3>
        <small className="text-sm font-normal leading-none mt-5 w-48">Bringing the Vibrant Tastes of the City to Your Doorstep</small>
        <SocialIcons />
      </div>

      <LinkGroup headerText="Company" links={["Home", "Items", "About Us", "Contact Us"]} hrefs={["/", "/items", "/about", "/contact"]} />
      <LinkGroup headerText="Legal" links={["Terms of Service", "Privacy Policy"]} hrefs={["/dummy", "/dummy"]} />
      <LinkGroup headerText="Customer Support" links={["Support", "Testimonials"]} hrefs={["/dummy", "/dummy"]} />
    </div>
  )
}

export default Footer