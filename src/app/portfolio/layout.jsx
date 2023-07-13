import React from 'react'

const Layout = ({children}) => {
  return (
    <div >
        <h1 className='text-[100px] mb-14'>Our Work</h1>
        {children}
    </div>
  )
}

export default Layout