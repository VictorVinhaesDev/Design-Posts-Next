import { Button } from '@/components'
import Image from 'next/image'
import React from 'react'

import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div>
      <h1 className='text-green1'>{params.category}</h1>
      {data.map((item)=>{
        return (
          <div className='flex gap-[50px] mt-[50px] mb-[100px] odd:flex-row-reverse'
          key={item.id}
          >
          <div className='flex flex-1 flex-col gap-5 justify-center'>
            <h1 className='text-[50px]'>{item.title}</h1>
            <p className='text-lg'>{item.desc}</p>
            <Button buttonName="See more" url="#"/>
          </div>
          <div className='flex-1 h-[500px] relative'>
            <Image height={500}width={500}  alt='test' src={item.image}  className='object-cover bg-slate-400' />
          </div>
        </div>
        )
      })}
     

    </div>
    
  )
}

export default Category