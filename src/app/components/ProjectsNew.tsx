"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaCode, FaRocket, FaDatabase, FaLayerGroup } from 'react-icons/fa';

// Imports locais
import { projects } from '@/contents/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Projects = () => {
  const { language } = useLanguage();

  const getProjectIcon = (index: number) => {
    const icons = [FaCode, FaRocket, FaDatabase, FaLayerGroup];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-3.5 h-3.5" />;
  };

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
    <section id="work" className="relative w-full py-24 bg-background">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div {...fadeInUp} className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {getTranslation(language, 'projectsPage.recentWork')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
               {getTranslation(language, 'projectsPage.description')}
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="shrink-0">
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors border-b border-border hover:border-primary pb-0.5"
            >
              <span>{getTranslation(language, 'projectsPage.viewAll')}</span>
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Grid de Projetos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              variants={fadeInUp}
              className="group flex flex-col h-full bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Imagem com Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Badge Flutuante */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                   <span className="text-primary">{getProjectIcon(index)}</span>
                   <span className="text-[10px] uppercase font-bold tracking-wider text-foreground">
                     {getTranslation(language, 'projectsPage.webApp')}
                   </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-col flex-1 p-6 lg:p-7">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {getTranslatedTitle(project)}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {getTranslatedDescription(project)}
                  </p>
                </div>
                
                {/* Tech Stack (Pills) */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground border border-border/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Botões de Ação */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/40">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex justify-center items-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all ${
                        project.hideCode ? 'col-span-2' : ''
                      }`}
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      {getTranslation(language, 'projectsPage.demo')}
                    </a>
                  )}

                  {project.githubLink && !project.hideCode && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-background border border-border hover:bg-secondary/50 hover:text-foreground hover:border-foreground/20 transition-all text-muted-foreground"
                    >
                      <FaGithub className="w-4 h-4" />
                      {getTranslation(language, 'projectsPage.code')}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Seção de Tecnologias (Redesenhada) */}
        <motion.section 
          className="mt-32"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-10">
             <h3 className="text-2xl font-bold tracking-tight mb-2">
                {getTranslation(language, 'projectsPage.trustedTech')}
            </h3>
            <p className="text-muted-foreground text-sm">
                {getTranslation(language, 'projectsPage.techDesc')}
            </p>
          </div>

          <div className="relative p-1">
             {/* Efeito de gradiente nas bordas para simular fade */}
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 hidden md:block" />
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 hidden md:block" />

             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech, i) => (
                <motion.div 
                  key={tech}
                  className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 px-6 py-4 cursor-default transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors duration-300"></div>
                    <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
      </div>
    </section>
  );
};

export default Projects;