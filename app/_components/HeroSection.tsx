import { Button } from "@/components/ui/button"
import FeatureChips from "@/components/feature-chips"
import Link from "next/link"
import Image from "next/image";
import CallToAction from "@/components/call-to-action";
import Heading from "@/components/heading";

import { LuKey } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuCheckCircle } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="h-max bg-gray-50 flex justify-around -z-10 w-full">
      <div className="mt-10 flex flex-col gap-5 ml-10">

        <Heading />
        <CallToAction />
        <FeatureChips
          headerText="Why CityFlavors"
          texts={["Secure Payments", "24/7 Support", "Quality Ingredients", "Fast Delivery", "Low Prices"]}
          icons={[<LuKey />, <LuUser />, <LuCheckCircle />, <LuTruck />, <LuDollarSign />]}
        />
      </div>

      <div className="md:flex items-center justify-center hidden">
        <Image src="/heroImage.png" alt="Hero Image" width={380} height={380} className="lg:block hidden" style={{aspectRatio: "0.87"}}/>
        <Image src="/heroImage.png" alt="Hero Image" width={300} height={300} className="lg:hidden block" style={{aspectRatio: "0.87"}} />
      </div>

    </div>
  )
}

export default HeroSection