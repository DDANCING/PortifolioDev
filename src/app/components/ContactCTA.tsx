"use client"

import { fadeInUp } from '@/utils/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaCalendar } from 'react-icons/fa'
import { useTranslation } from '@/hooks/useTranslation';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl sm:px-6 sm:mt-24 border-t border-border mt-16 mx-auto mb-16 pt-10 px-4">
      <motion.div 
        className="relative overflow-hidden rounded-3xl border border-border bg-card text-foreground p-6 sm:p-8"
        {...fadeInUp}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,hsl(var(--primary)/0.07),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,hsl(var(--primary)/0.06),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.08)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
        </div>

        <div className="relative">
          <motion.h2 
            className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] font-semibold tracking-tight"
            {...fadeInUp}
            transition={{delay: 0.2}}
          >
            {t('contact.ctaTitle')} <span className="text-muted-foreground">{t('contact.ctaSubtitle')}</span>
          </motion.h2>

          <motion.div 
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-border"
            {...fadeInUp}
            transition={{delay: 0.4}}
          >
            <div>
              <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
              <a 
                href="mailto:mmazzonetto17@gmail.com" 
                className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight hover:text-primary transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="break-all">mmazzonetto17@gmail.com</span>
              </a>
            </div>
            <div className="md:pl-8">
              <p className="text-sm text-muted-foreground">{t('contact.schedule')}</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-primary-foreground bg-primary hover:bg-primary/90 border border-border mt-2 transition-colors"
              >
                <FaCalendar className="w-4 h-4" />
                <span>{t('contact.getInTouch')}</span>
              </Link>
            </div>
            <div className="md:pl-8">
              <p className="text-sm text-muted-foreground">{t('contact.social')}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a 
                  href="https://github.com/DDANCING" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/marcelo-mazzonetto-87214b233/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/marcelomazzonetto/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/5545998405219" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="text-[11px] text-muted-foreground text-center mt-6"
            {...fadeInUp}
            transition={{delay: 0.6}}
          >
            © {new Date().getFullYear()} Marcelo Mazzonetto — {t('contact.availability')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactCTA
