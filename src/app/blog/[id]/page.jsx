import Image from "next/image"
import {notFound} from "next/navigation"
import {BiUserCircle} from "react-icons/bi"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.description,
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)

 
  return (
    <div>
      <div className="flex">
          <div className="flex flex-1 flex-col justify-between">
            <h1 className="mb-[10px] text-[40px]">
              {data.title}
            </h1>
            <p>
              {data.desc}
            </p>
            <div className="flex items-center gap-[10px]">
              <BiUserCircle 
               className="object-cover rounded-full text-[35px]"
              />
              <span>{data.username}</span>
            </div>
          </div>

          <div className="flex-1 h-[300px] relative">
            <Image
            src={data.image}
            fill={true}
            className="object-cover"
            />
          </div>
      </div>
      <div className="mt-[50px] font-light texte-[#999] text-sm text-justify">
        <p className="text-sm font-light">
         {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost