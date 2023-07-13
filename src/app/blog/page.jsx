import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


async function getData() {

  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()

}

const Blog = async () => {

  const data = await getData()

  return (
    <div className='flex flex-col-reverse'>
      {data.map((item) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            className='flex items-center gap-[50px] mb-[50px]'
            key={item.id}
            >  
            <div>
              <Image
                className='object-cover'
                src={item.image}
                alt=''
                width={400}
                height={250}
              />
            </div>
            <div>
              <h1 className='mb-3'>{item.title}</h1>
              <p className='text-sm text-[#999]'>{item.description}</p>
            </div>
          </Link>
        )
      })}

    </div>
  )
}

export default Blog