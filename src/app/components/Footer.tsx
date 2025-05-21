import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-muted border-t '>
        <div className='container max-w-7xl mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <Link className='text-xl font-bold text-primary' href="/">
                      Portfolio
                    </Link>
                    <p className='text-muted-foreground text-sm'> © {new Date().getFullYear()} Marcelo Mazzonetto Portfolio. All rights reserved.  </p>
                </div>
                  <div className='flex space-x-4'>
                              <a
                                href="https://github.com/DDANCING"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-muted-foreground hover:text-primary"
                              >
                                <FaGithub />
                              </a>
                              
                              <a
                                href="https://www.linkedin.com/in/marcelo-mazzonetto-87214b233/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-muted-foreground hover:text-primary"
                              >
                                <FaLinkedin />
                              </a>
                              
                              <a
                                href="https://www.instagram.com/marcelomazzonetto/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-muted-foreground hover:text-primary"
                              >
                                <FaInstagram />
                              </a>
                
                              
                              <a
                               href="https://wa.me/5545998405219"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-2xl text-muted-foreground hover:text-primary"
                             >
                               <FaWhatsapp />
                             </a>
                          </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer