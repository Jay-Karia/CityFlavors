import { IoMdTime } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FaInfinity } from "react-icons/fa";
import TextCard from "./text-card";

const AboutCard = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <TextCard
        header="When we started?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa lacus, ultricies eu fringilla nec, venenatis condimentum dui."
        icon={<IoMdTime />}
      />
      <TextCard
        header="Why we started?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa lacus, ultricies eu fringilla nec, venenatis condimentum dui. Curabitur iaculis vitae elit sit amet ullamcorper."
        icon={<AiOutlineQuestionCircle />}
      />
      <TextCard
        header="Our Future"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa lacus, ultricies eu fringilla nec, venenatis condimentum dui. Curabitur iaculis vitae elit sit amet ullamcorper. In eleifend dictum quam nec euismod."
        icon={<GoGraph />}
      />
      <TextCard
        header="Our Legacy"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa lacus, ultricies eu fringilla nec, venenatis condimentum dui.sadasdsadasdfsdfsd."
        icon={<FaInfinity />}
      />
    </div>
  )
}

export default AboutCard