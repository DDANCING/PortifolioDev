import React from 'react'
import { certifications } from '@/contents/certifications'
import Link from 'next/link'
import { FaFlagCheckered, FaStopwatch } from 'react-icons/fa'

const Certifications = () => {
  return (
    <section className='py-20 container max-w-8xl mx-auto px-4 '>
      <h2 className='text-3xl font-bold mb-12 text-center'>  Skills & Certifications </h2>

      <div>
        {
            certifications.map((certification) => (
               <article key={certification.title} className='bg-muted/50 rounded-lg shadow-md p-6 flex items-start gap-10  mb-2'>
                    <div className='w-[40%]'>
                    <Link href={certification.certificateLink}>
                    <h3 className='text-xl font-semibold mb-2 hover:text-primary transition-colors'>{certification.title}</h3>
                    
                    <p className='text-muted-foreground mb-4'>
                     {certification.institution}
                    </p>
                    <div className='flex items-center gap-2 '>
                        <FaStopwatch />
                        <span > { certification.duration }  </span>
                        <FaFlagCheckered />
                        <span > { certification.completionDate }  </span>
                    </div>
                    </Link>
                    </div>
                    
                   <div className="flex flex-col gap-2 w-full">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {certification.topics.map((topic, index) => (
                       <span
                         key={index}
                         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                       >
                         {topic}
                       </span>
                     ))}
                   </div>
                 
                   <div className=" flex flex-wrap gap-2 mb-4 ">
                     {certification.technologies.map((tech, index) => (
                       <span
                         key={index}
                         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>

               </article>
            ))
        }
      </div>
    </section>
  )
}

export default Certifications