"use client";
import React, { useState } from 'react'
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const Navbar = () => {

    
    const pathname = usePathname();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    } 

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/Certifications", label: "Certifications"},
        {href: "/contact", label: "Contact"},
    ]
  return (
    <nav className='fixed w-full bg-muted/80 backdrop-blur-sm z-50'>
       <div className='container max-w-7xl mx-auto px-4'>
          {/* desktop */}
          <div className='flex items-center justify-between h-16'>
            <Link href="/" className='text-primary font-bold text-xl'>
            <Image
            src={"/Logo.png"}
            alt='logo'
            width={50}
            height={50}
            />
            </Link>
            {/* desktop menus */}
            <div className='hidden md:flex items-center space-x-8'>
                {
                    menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                        <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors ${isActive ? 'font-medium text-primary' : ''}`}> {item.label} </Link>
                        )
                    })
                }
                <ModeToggle/>
            </div>
            </div> 

          {/* mobile */}
          <button onClick={toggleMobileMenu} className='md:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer'>
            {isMobileMenuOpen ? (
                <XMarkIcon className='w-6 h-6'/>
            ) : (
                <Bars3Icon className='w-6 h-6'/>
            )}
          </button>
       </div>
    
    {/* mobile menu */}
    {
        isMobileMenuOpen && (
            <div className='md:hidden '>
                <div className='py-4 space-y-4 p-4'>
                    {
                    menuItems.map((item, index) => (
                            <div key={index}>
                                 <Link key={item.href} href={item.href} className="block py-2 hover:text-primary transition-colors"> {item.label} </Link>
                            </div>
                        )
                    )
                }
                </div>
                <div className='p-4'>
                 <ModeToggle/>
                 </div>
            </div>
        )
    }
    </nav>
  )
}

export default Navbar