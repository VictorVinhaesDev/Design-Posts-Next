import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='h-12 flex items-center justify-between'>
      <div>
      ©2023 Victor. All rights reserved.
      </div>
      <div className='flex items-center gap-3'>
    <Image className='cursor-pointer opacity-85' src="/1.png"height={20} width={20}  alt='social media'/>
    <Image className='cursor-pointer opacity-85' src="/2.png"height={20} width={20} alt='social media'/>
    <Image className='cursor-pointer opacity-85' src="/3.png"height={20} width={20} alt='social media'/>
    <Image className='cursor-pointer opacity-85' src="/4.png"height={20} width={20} alt='social media'/>
      </div>
    </footer>
  )
}

export default Footer