"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className='hidden md:flex gap-4'>
        {links.map((links) => (
          <Link key={links.title} href={links.url}>{links.title}</Link>
        ))}
      </div>
      {/* LOGO */}
      <div className='md:hidden'>
        <Link href="/" className='bg-black p-1 rounded-md font-semibold text-sm flex items-center justify-center'>
          <span className='text-white mr-1'>Maitulya</span>
          <span className='w-12 h-8 bg-white text-black flex items-center justify-center rounded'>.dev</span>
        </Link>
      </div>
      {/* SOCIAL LINKS  */}
      <div className='hidden md:flex gap-4'>
        <Link href="https://github.com/Maitulya7">
          <Image src='/github.png' alt='github' width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/maitulya-vaghela-20b6b4218/">
          <Image src='/linkedin.png' alt='github' width={24} height={24} />
        </Link>
        <Link href="https://github.com/Maitulya7">
          <Image src='/pinterest.png' alt='github' width={24} height={24} />
        </Link>
        <Link href="https://github.com/Maitulya7">
          <Image src='/dribbble.png' alt='github' width={24} height={24} />
        </Link>
      
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON  */}
        <button
          className='w-10 h-6 flex flex-col justify-between z-50 relative'
          onClick={handleToggle}
        >
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
        {/* MENU LINKS */}
        {
          open && (
            <div className='absolute top-0 left-0 bg-gradient-to-b from-black to-gray-900 text-white text-3xl h-screen w-screen flex flex-col justify-center items-center gap-8'>
              {links.map((links) => (
                <Link key={links.title} href={links.url}>{links.title}</Link>
              ))}
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar