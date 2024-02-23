import { Label } from "@/components/ui/label"

interface Props {
    headerText: string,
    texts: string[],
    icons: React.ReactNode[]
}

const FeatureChips = ({ headerText, texts, icons }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <h4 className="scroll-m-20 text-lg font-medium tracking-tight focus-visible:border-2">
                {headerText}
            </h4>
            <div className="sm:grid sm:grid-cols-3 flex flex-wrap sm:mt-3 gap-5 ">
                {texts.map((text, index) => (
                    <div key={index} className="flex gap-1 items-center">
                        <p>{text}</p>
                        {icons[index]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureChips