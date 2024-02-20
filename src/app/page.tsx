"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className={"m-2 text-xl flex flex-col"}>
      <div>Hello Next js</div>
      <div className={"text-slate-500 font-bold"}>This is Tailwind CSS</div>
      <div>This is <Button variant={"default"}>Shadcn UI</Button></div>
      <div>This is landing / home page</div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </div>
  );
}
