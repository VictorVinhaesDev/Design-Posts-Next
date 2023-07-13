import Link from "next/link"

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-7">Choose a galley</h1>
      <div className="flex gap-[50px]">
        <Link href="/portfolio/illustrations" className="border-[5px] rounded w-[300px] h-[400px] relative bg-ilustration bg-cover hover:text-green1">
          <span className="absolute right-3 bottom-3 text-4xl font-bold">Ilustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="border-[5px] rounded w-[300px] h-[400px] relative  bg-websites bg-cover">
          <span className="absolute right-3 bottom-3 text-4xl font-bold">Websites</span>
        </Link>
        <Link href="/portfolio/applications" className="border-[5px] rounded w-[300px] h-[400px] relative bg-apps">
          <span className="absolute right-3 bottom-3 text-4xl font-bold bg-cover">Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio