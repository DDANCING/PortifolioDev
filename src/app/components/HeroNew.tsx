'use client'

import { fadeInUp, scaleIn } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaCode, FaCheck } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { useTranslation } from '@/hooks/useTranslation'

// Extend Window interface for UnicornStudio
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const Hero = () => {
  const { t } = useTranslation()

  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* UnicornStudio Aura Background */}
      <div className="aura-background-component top-0 w-full -z-10 absolute h-full pointer-events-none">
        <div data-us-project="cqcLtDwfoHqqRPttBbQE" className="absolute top-0 left-0 -z-10 w-full h-full opacity-60"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
              <h1 className="leading-none text-foreground tracking-tighter font-bold">
                {/* Correção: Uso de clamp/tamanhos fixos para evitar quebra em telas ultrawide */}
                <motion.span 
                  {...fadeInUp} 
                  transition={{delay: 0.2}}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] mb-2"
                >
                  {t('heroNew.firstName')}
                </motion.span>
                <motion.span 
                  {...fadeInUp} 
                  transition={{delay: 0.4}}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-foreground"
                >
                  {t('heroNew.lastName')}
                </motion.span>
              </h1>

              <motion.div 
                {...fadeInUp} 
                transition={{delay: 0.6}}
                className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium h-8 sm:h-10"
              >
                 <div className="notranslate flex justify-center lg:justify-start items-center gap-2" translate="no">
                  <span className="text-primary/60">{'>'}</span>
                  <Typewriter
                    options={{
                      strings: [
                        t('heroNew.softwareEngineer'),
                        t('heroNew.fullStackDeveloper'),
                        t('heroNew.next'),
                        t('heroNew.react'),
                        t('heroNew.reactNative'),
                        t('heroNew.nodejs'),
                        t('heroNew.devOps'),
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div 
                {...fadeInUp} 
                transition={{delay: 0.8}}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href="/projects" 
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground bg-primary overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                  <FaCode className="w-4 h-4" />
                  <span>{t('heroNew.viewWork')}</span>
                </Link>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-foreground bg-background/30 border border-white/10 backdrop-blur-md hover:bg-background/50 transition-all hover:border-primary/30"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                  <span>{t('heroNew.contactEmail')}</span>
                </Link>
              </motion.div>

              <motion.div 
                {...fadeInUp} 
                transition={{delay: 1.0}}
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/50 pt-6"
              >
                <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{t('heroNew.basedIn')}</p>
                    <p className="text-xs text-muted-foreground">{t('heroNew.openToRemote')}</p>
                  </div>
                </div>
                
                <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                     <FaCode className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{t('heroNew.fullStackMobile')}</p>
                    <p className="text-xs text-muted-foreground">{t('heroNew.techStack')}</p>
                  </div>
                </div>

                <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FaCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{t('heroNew.available')}</p>
                    <p className="text-xs text-muted-foreground text-green-400">{t('heroNew.startingImmediately')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeInUp} 
                transition={{delay: 1.2}}
                className="mt-8 flex justify-center lg:justify-start space-x-6"
              >
                {[
                  { icon: FaGithub, href: "https://github.com/DDANCING" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/marcelo-mazzonetto-87214b233/" },
                  { icon: FaInstagram, href: "https://www.instagram.com/marcelomazzonetto/" },
                  { icon: FaWhatsapp, href: "https://wa.me/5545998405219" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                  >
                    <social.icon />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0">
              <motion.div 
                {...scaleIn} 
                transition={{delay: 0.4}}
                className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-auto lg:h-auto lg:aspect-[3/4] max-w-sm rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
                <Image
                  src="/profile.jpg"
                  alt="Marcelo Mazzonetto"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{filter: 'grayscale(20%) saturate(1.1) contrast(1.1)'}}
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Stats Cards - Redesigned */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <StatCard number="5+" label={t('heroNew.yearsExp')} />
                  <StatCard number="50+" label={t('heroNew.projects')} />
                  <StatCard number="100%" label={t('heroNew.satisfaction')} />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// Sub-component para os cards de estatística ficarem mais limpos
const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-2 lg:p-3 text-center transition-transform hover:-translate-y-1">
    <div className="flex items-center justify-center gap-1.5 mb-1">
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
      <span className="text-sm lg:text-base font-bold text-white tracking-tight">{number}</span>
    </div>
    <p className="text-[10px] lg:text-[11px] text-gray-300 font-medium leading-tight">{label}</p>
  </div>
)

export default Hero