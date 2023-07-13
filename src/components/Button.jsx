import React from 'react'
import Link from 'next/link'

const Button = ({buttonName, url}) => {
  return (
   <Link href={url} className='p-5 bg-green1 rounded-md w-max text-white'>
    {buttonName}
   </Link>
  )
}

export default Button