"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
]

const Navbar = () => {

  const topVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255 , 255 , 255)"
    }
  }
  const centerVariants = {
    closed: {
      rotate: 0,
      opacity: 1
    },
    open: {
      opacity: 0
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255 , 255 , 255)"
    }
  }

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-base'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((links) => (
          <NavLinks key={links.title} links={links} />
        ))}
      </div>
      {/* LOGO */}
      <div className='md:hidden  lg:flex lg:w-1/3 justify-center'>
        <Link href="/" className='bg-black p-1 rounded-md font-semibold text-sm flex items-center justify-center'>
          <span className='text-white mr-1'>Maitulya</span>
          <span className='w-12 h-8 bg-white text-black flex items-center justify-center rounded'>.dev</span>
        </Link>
      </div>
      {/* SOCIAL LINKS  */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center items-center'>
        <Link href="https://github.com/Maitulya7">
          <Image src='/github.png' alt='github' width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/maitulya-vaghela-20b6b4218/">
          <Image src='/linkedin.png' alt='linkedin' width={24} height={24} />
        </Link>
        <Link href="https://github.com/Maitulya7">
          <Image src='/pinterest.png' alt='pinterest' width={24} height={24} />
        </Link>
        <Link href="https://github.com/Maitulya7">
          <Image src='/dribbble.png' alt='dribbble' width={24} height={24} />
        </Link>

      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON  */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={handleToggle}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'
            ></motion.div>
          <motion.div
            variants={centerVariants}
            animate= {open ? "open" : "closed"}
            className='w-10 h-1 bg-black rounded '
            ></motion.div>
          <motion.div 
            variants={bottomVariants} 
            animate= {open ? "open" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'
            ></motion.div>

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