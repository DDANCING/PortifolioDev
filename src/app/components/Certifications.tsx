'use client'

import React from 'react'
import { certifications } from '@/contents/certifications'
import Link from 'next/link'
import { FaFlagCheckered, FaStopwatch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

// Mapeamento de títulos para chaves de tradução
const getCertificationTranslationKey = (title: string): string | null => {
  const mapping: Record<string, string> = {
    'Software Engineering': 'softwareEngineering',
    'Duolingo Clone': 'duolingoClone',
    'Build an LMS Platform': 'lmsPlatform',
    'Next Auth v5 - Advanced Guide': 'nextAuthAdvanced',
    'NLW Journey - DevOps': 'nlwDevOps',
    'NLW Journey - Node.js': 'nlwNodejs',
    'NLW Journey - React Native': 'nlwReactNative',
    'NLW Journey - React.js': 'nlwReact',
    'NLW Unite - DevOps': 'nlwUniteDevOps',
    'NLW Unite - Node.js': 'nlwUniteNodejs',
    'NLW Unite - React Native': 'nlwUniteReactNative',
    'NLW Unite - React.js': 'nlwUniteReact',
    'NLW Expert - Node.js': 'nlwExpertNodejs',
    'NLW Expert - React.js': 'nlwExpertReact',
    'NLW Expert - React Native': 'nlwExpertReactNative',
    'NLW IA': 'nlwIA',
  }
  return mapping[title] || null
}

const Certifications = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()

  const getTranslatedDescription = (certification: typeof certifications[0]): string => {
    const key = getCertificationTranslationKey(certification.title)
    if (key) {
      const translated = t(`certifications.${key}.description`)
      // Se retornou a própria chave, significa que não encontrou tradução, usa a original
      if (translated !== `certifications.${key}.description`) {
        return translated
      }
    }
    return certification.description || ''
  }

  const formatDate = (dateString: string): string => {
    try {
      const parts = dateString.split('-')
      const year = parts[0]
      const month = parts[1]
      
      const monthNames: Record<string, Record<string, string>> = {
        pt: {
          '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril',
          '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto',
          '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
        },
        en: {
          '01': 'January', '02': 'February', '03': 'March', '04': 'April',
          '05': 'May', '06': 'June', '07': 'July', '08': 'August',
          '09': 'September', '10': 'October', '11': 'November', '12': 'December'
        },
        es: {
          '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril',
          '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto',
          '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre'
        }
      }
      
      if (month && monthNames[language]?.[month] && year) {
        return `${monthNames[language][month]} ${year}`
      }
      return dateString
    } catch {
      return dateString
    }
  }

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
        {t('certificationsPage.title')}
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
                
                {certification.description && (
                  <p className='text-sm text-muted-foreground mb-4 line-clamp-3'>
                    {getTranslatedDescription(certification)}
                  </p>
                )}

                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <FaStopwatch />
                  <span>{t('certificationsPage.duration')}: {certification.duration}</span>
                  <FaFlagCheckered />
                  <span>{t('certificationsPage.completed')} {formatDate(certification.completionDate)}</span>
                </div>
              </Link>
            </div>

            <div className='flex flex-col gap-2 w-full'>
              {/* Tópicos */}
              <div className='flex flex-wrap gap-2 mb-2 md:flex'>
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
              <div className='flex flex-wrap gap-2 mb-2 md:flex'>
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
