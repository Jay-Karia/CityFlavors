import Header from "@/components/Header"

const HeroSection = () => {
  return (
    <div className="h-96 bg-slate-50 flex justify-around">
      <div className="mt-5">
        <div className="w-3/4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-medium tracking-tight first:mt-0">
            Elevate Your Dining Experience with <span className="text-orange-500">CityFlavors</span>
          </h2>
        </div>

        <div>
          subtitle
        </div>

        <div>
          ctas
        </div>

        <div>
          why us?
        </div>

      </div>

      <div>
        Image
      </div>

    </div>
  )
}

export default HeroSection