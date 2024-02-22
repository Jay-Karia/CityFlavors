import SocialIcons from "@/components/social-icons";
import LinkGroup from "@/components/link-group";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full pb-10 pt-2 flex flex-wrap h-[180px] sm:justify-evenly sm:gap-0 justify-items-center gap-10">
      <div className="flex flex-col mx-5">
        <h3 className="scroll-m-20 text-2xl font-normal tracking-tight ">
          CityFlavors
        </h3>
        <small className="text-sm font-normal leading-none mt-5 sm:w-48 w-36">
          Bringing the Vibrant Tastes of the City to Your Doorstep
        </small>
        <SocialIcons />
      </div>

      <LinkGroup
        headerText="Company"
        links={["Home", "Items", "About Us", "Contact Us"]}
        hrefs={["/", "/items", "/about", "/contact"]}
        className="ml-5"
      />
      <LinkGroup
        headerText="Legal"
        links={["Terms of Service", "Privacy Policy"]}
        hrefs={["/dummy", "/dummy"]}
        className="ml-5"
      />
      <LinkGroup
        headerText="Customer Support"
        links={["Support", "Testimonials"]}
        hrefs={["/dummy", "/dummy"]}
        className="ml-5"
      />
    </footer>
  );
};

export default Footer;
