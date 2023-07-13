"use client"
import Link from 'next/link';
import React from 'react'
import DarkModeToggle from './DarkModeToggle';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  //vamos pegar a session pra poder fazer o botão mudar dentre "login" "logout"
  const session= useSession()

  return (
    <nav className='h-[100px] flex justify-between items-center'>
      <Link href="/" className='font-bold text-xl underline underline-offset-4' >
         Tech Design
      </Link>

      <div className='flex items-center gap-20'>
        <DarkModeToggle/>
        {links.map((links) => {
          return (
            <Link key={links.id} href={links.url}>
              {links.title}
            </Link>
          )
        })}
        {session.status === "authenticated" ? (
          <button onClick={signOut} className='p-1 bg-red-500 text-white rounded'>
          Logout
        </button>
        ) : 
        <button onClick={signIn} className='p-1 bg-green1 text-white rounded'>
        Login
      </button>}
        
      </div>
    </nav>
  )
}

export default Navbar