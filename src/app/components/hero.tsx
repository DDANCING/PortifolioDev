'use client'

import { Button } from '@/components/ui/button'
import { fadeInUp, scaleIn } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto flex'>
      <motion.div className='max-w-3xl mx-auto text-center flex flex-col items-center mb-4'>
        <motion.div {...scaleIn} transition={{delay: 0.2}}>
          <Image
            src="/profile.jpg"
            alt='profile image'
            width={100}
            height={100}
            className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
          />
        </motion.div>
        <div>
          <motion.h1 {...fadeInUp} transition={{delay: 0.3}} className='text-2xl md:text-4xl font-bold mb-6'>
            What’s up? I’m <motion.span {...fadeInUp} transition={{delay: 0.5}} className='text-primary'>Marcelo Mazzonetto</motion.span>
          </motion.h1>
          <div className='text-xl md:text-2xl text-muted-foreground h-10'>
            <div className="notranslate" translate="no">
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
          </div>
          <motion.div {...fadeInUp} transition={{delay: 0.7}}  className='flex justify-center space-x-4 mb-8'>
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
          </motion.div>
          <motion.div className='flex justify-center' {...fadeInUp} transition={{delay: 0.9}}>
             <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link href="/projects">
              <Button className='text-muted font-bold text-lg p-6 m-2 shadow-md'>
                Projects
              </Button>
            </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link href="/contact">
              <Button variant={'secondary'} className='text-foreground font-bold text-lg p-6 m-2 shadow-md'>
                Contact
              </Button>
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
