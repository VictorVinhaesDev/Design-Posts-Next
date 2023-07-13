import Image from "next/image";
import { hero } from "public"
import {Button} from "@/components"
export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h1 className="text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb]" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent'}}> Better design for your digital products.</h1>
        <p className="text-base font-light">Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button buttonName="See Our Works" url="/portfolio"/>
      </div>
      <div></div>
      <Image src={hero} height={500} alt="hero"/>
    </div>
  )
}
