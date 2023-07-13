import React from 'react'
import Image from 'next/image';
import { Button } from '@/components';

export const metadata = {
  title: 'Contact',
  description: 'Contact page',
}



const Contact = () => {

  return (
    <div className=''>
      <h1 className='text-[60px] mb-[100px] text-center'>Let's Keep in Touch</h1>
      <div className='flex items-center gap-[100px]'>
        <div className='relative flex-1'>
          <Image
            src="/contact.png"
            alt=""
          width={500}
           height={500}
          />
        </div>
        <form className='flex flex-1 flex-col gap-5'>
          <input type="text" placeholder="name"  className='p-5 bg-transparent outline-none text-[#bbb] border-2 border-gray-500'/>
          <input type="text" placeholder="email"  className='p-5 bg-transparent  outline-none text-[#bbb] border-2 border-gray-500'/>
          <textarea
            className='p-5 bg-transparent  outline-none text-[#bbb]  border-2 border-gray-500'
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" buttonName="Send" />
        </form>
      </div>
    </div>
  )
};

export default Contact