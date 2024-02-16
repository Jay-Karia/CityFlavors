import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className={"m-2 text-2xl flex flex-col gap-3"}>
      <div>Hello Next js</div>
      <div className={"text-slate-500 font-bold"}>This is Tailwind CSS</div>
      <div>This is <Button variant={"default"}>Shadcn UI</Button></div>
    </div>
  );
}
