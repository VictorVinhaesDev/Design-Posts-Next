import { Button } from '@/components'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
      <div className='w-full h-[300px] relative'>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt='reuniao foto' 
          style={{objectFit:'cover', filter: "grayscale(100)"}} />
        <div className='absolute bottom-5 left-4 bg-green1 p-5 text-white'>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className='flex gap-24 '>
        <div className='flex-1 mt-14 flex flex-col gap-8'>
          <h1>Who Are We?</h1>
          <p className='text-sm font-light justify-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className='flex-1 mt-14 flex flex-col gap-8'>
          <h1>What We Do?</h1>
          <p className='text-sm font-light justify-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button buttonName="Contact" url="/contact"/>
        </div>
      </div>
    </div>
  )
}

export default About