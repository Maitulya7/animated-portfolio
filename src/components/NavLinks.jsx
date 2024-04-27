"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const NavLinks = ({ links }) => {
  const pathname = usePathname()
  return (
    <div className={`rounded p-1 ${pathname == links.url && "bg-black text-white"}`}>
      <Link href={links.url}>{links.title}</Link>
    </div>
  )
}

export default NavLinks