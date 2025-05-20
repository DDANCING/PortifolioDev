'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto flex'>
      <div className='max-w-3xl mx-auto text-center flex flex-col items-center mb-4'>
        <div>
          <Image
            src="/profile.jpg"
            alt='profile image'
            width={100}
            height={100}
            className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
          />
        </div>
        <div>
          <h1 className='text-2xl md:text-4xl font-bold mb-6'>
            What’s up? I’m <span className='text-primary'>Marcelo Mazzonetto</span>
          </h1>
          <div className='text-xl md:text-2xl text-muted-foreground h-10'>
            <Typewriter
              options={{
                strings: [
                  'Software Engineer',
                  'Full Stack Developer',
                  'Next',
                  'React',
                  'React Native',
                  'Node.js',
                  'DevOps',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          <div className='flex justify-center space-x-4 mb-8'>
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
          <div>
            <Link href="/projects">
              <Button className='text-foreground font-bold text-lg p-6 m-2'>
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant={'secondary'} className='text-foreground font-bold text-lg p-6 m-2'>
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
