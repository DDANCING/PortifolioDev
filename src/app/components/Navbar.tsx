"use client";
import React from 'react'
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
   /* const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    } */

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/blogs", label: "Blogs"},
        {href: "/contact", label: "Contact"},
    ]
  return (
    <nav className='fixed w-full bg-muted backdrop-blur-sm z-50'>
       <div className='container max-w-7xl mx-auto px-4'>
          {/* desktop */}
          <div className='flex items-center justify-between h-16'>
            <Link href="/" className='text-primary font-bold text-xl'>
            Portfolio
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
       </div>
    
    </nav>
  )
}

export default Navbar