'use client'

import React from 'react'
import { certifications } from '@/contents/certifications'
import Link from 'next/link'
import { FaFlagCheckered, FaStopwatch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'


const Certifications = () => {
  return (
    <motion.section
      className='py-20 container max-w-8xl mx-auto px-4'
      variants={staggerContainer}
      initial='initial'
      animate='animate'
    >
      <motion.h2
        className='text-3xl font-bold mb-12 text-center'
        {...fadeInUp}
      >
        Skills & Certifications
      </motion.h2>

      <div>
        {certifications.map((certification) => (
          <motion.article
            key={certification.title}
            className='bg-muted/50 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start gap-10 mb-6'
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='w-full md:w-[40%]'>
              <Link href={certification.certificateLink} target='_blank'>
                <motion.h3
                  className='text-xl font-semibold mb-2 hover:text-primary transition-colors'
                  whileHover={{ x: 4 }}
                >
                  {certification.title}
                </motion.h3>

                <p className='text-muted-foreground mb-4'>
                  {certification.institution}
                </p>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <FaStopwatch />
                  <span>{certification.duration}</span>
                  <FaFlagCheckered />
                  <span>{certification.completionDate}</span>
                </div>
              </Link>
            </div>

            <div className='flex flex-col gap-2 w-full'>
              {/* Tópicos */}
              <div className='flex flex-wrap gap-2 mb-2 hidden md:flex'>
                {certification.topics.map((topic, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-2 mb-2 md:hidden'>
                {certification.topics.slice(0, 4).map((topic, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-primary/10 text-primary rounded-full text-xs'
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Tecnologias */}
              <div className='flex flex-wrap gap-2 mb-2 hidden md:flex'>
                {certification.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-2 mb-2 md:hidden'>
                {certification.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-primary/10 text-primary rounded-full text-xs'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications
