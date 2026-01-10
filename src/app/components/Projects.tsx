"use client"

import { projects } from '@/contents/projects'
import { cardHoverSmall, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

const Projects = () => {
  const { language } = useLanguage();

  // Mapeamento de títulos para chaves de tradução
  const getProjectTranslationKey = (title: string): string | null => {
    const mapping: Record<string, string> = {
      'ProjectA': 'projectA',
      'Toctok': 'toctok',
      'E-commerce': 'ecommerce',
      'Cris Mazzonetto': 'crisMazzonetto',
      'Comm': 'comm',
      'Tcar Imports': 'tcarImports',
    };
    return mapping[title] || null;
  };

  const getTranslatedTitle = (project: typeof projects[0]): string => {
    const key = getProjectTranslationKey(project.title);
    if (key) {
      const translated = getTranslation(language, `projects.${key}.title`);
      if (translated !== `projects.${key}.title`) {
        return translated;
      }
    }
    return project.title;
  };

  const getTranslatedDescription = (project: typeof projects[0]): string => {
    const key = getProjectTranslationKey(project.title);
    if (key) {
      const translated = getTranslation(language, `projects.${key}.description`);
      if (translated !== `projects.${key}.description`) {
        return translated;
      }
    }
    return project.description;
  };
  return (
    <section className="py-20">
  <div className="container max-w-7xl mx-auto px-4">
    <motion.h2
      className="text-3xl font-bold mb-12 text-center"
      {...fadeInUp}
    >
      {getTranslation(language, 'projectsPage.title')}
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project) => (
        <motion.article
          key={`${project.title}-${project.image}`}
          className="mb-10 bg-muted/50 rounded-md shadow-md p-6"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <motion.h3
            className="text-xl font-semibold mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {getTranslatedTitle(project)}
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {getTranslatedDescription(project)}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies.map((tech) => (
              <motion.span
                key={`${tech}-${project.title}`}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.githubLink && !project.hideCode && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span>{getTranslation(language, 'projectsPage.code')}</span>
              </motion.a>
            )}

            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span>{getTranslation(language, 'projectsPage.demo')}</span>
            </motion.a>
          </motion.div>
        </motion.article>
      ))}
    </motion.div>
  </div>
</section>
  )
}

export default Projects