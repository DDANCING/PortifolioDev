"use client";

import React from "react";
import { FaCode, FaLaptop, FaTools, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  staggerContainer,
  cardHover,
} from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";


const AboutClient = () => {
  const { language } = useLanguage();

  // Dados das Skills organizados para facilitar o map
  const skillCategories = [
    {
      icon: FaCode,
      title: getTranslation(language, "aboutPage.frontend"),
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Shadcn/ui", "Framer Motion"],
    },
    {
      icon: FaLaptop,
      title: getTranslation(language, "aboutPage.backend"),
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Python", "API REST"],
    },
    {
      icon: FaTools,
      title: getTranslation(language, "aboutPage.tools"),
      skills: ["Figma", "Git / GitHub", "Docker", "AWS", "Vercel", "AI Integration"],
    },
  ];

  // Dados das Experiências (Timeline)
  const experiences = [
    {
      id: 3,
      role: "Sew Software", // Nome do Projeto/Empresa
      title: getTranslation(language, "aboutPage.exp3Role"),
      period: "2025 - Present",
      company: "M/M, Cascavel-PR",
      description: getTranslation(language, "aboutPage.exp3Desc"),
      link: "https://sew-demo.vercel.app/",
      linkText: getTranslation(language, "aboutPage.viewDemo"),
    },
    {
      id: 2,
      role: "M/M Development",
      title: getTranslation(language, "aboutPage.exp2Role"),
      period: "2025 - Present",
      company: "M/M, Cascavel-PR",
      description: getTranslation(language, "aboutPage.exp2Desc"),
      link: "https://crismazzonetto.com.br",
      linkText: getTranslation(language, "aboutPage.visit"),
    },
    {
      id: 1,
      role: "JucouraJeans",
      title: getTranslation(language, "aboutPage.exp1Role"),
      period: "2021 - 2023",
      company: "Cascavel-PR",
      description: getTranslation(language, "aboutPage.exp1Desc"),
      link: null,
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-24 px-4 sm:px-6">
      
      {/* --- Header Section --- */}
      <div className="text-center mb-20 space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          {...fadeInDown}
        >
          {getTranslation(language, "aboutPage.title")}
        </motion.h1>
        <motion.div 
            className="w-20 h-1.5 bg-primary mx-auto rounded-full"
            {...fadeIn}
            transition={{ delay: 0.2 }}
        />
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4"
          {...fadeInUp}
        >
          {getTranslation(language, "aboutPage.description")}
        </motion.p>
      </div>

      {/* --- Skills Section --- */}
      <motion.section
        className="mb-24"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3"
          variants={fadeInUp}
        >
          <FaCode className="text-primary opacity-80" />
          {getTranslation(language, "aboutPage.skillsTitle")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-muted-foreground text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2.5"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- Experience Section (Timeline Design) --- */}
      <motion.section
        className="relative"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3"
          variants={fadeInUp}
        >
          <FaBriefcase className="text-primary opacity-80" />
          {getTranslation(language, "aboutPage.experienceTitle")}
        </motion.h2>

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

        <div className="space-y-12 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={fadeInUp}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary translate-y-1.5 md:-translate-x-1/2 z-10 hidden md:block" />

              {/* Content Card */}
              <div className="flex-1 md:w-1/2">
                 <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 transition-colors w-full relative">
                         {/* Mobile Dot */}
                        <div className="absolute left-0 top-0 -ml-[21px] mt-6 w-3 h-3 rounded-full bg-primary md:hidden"></div>
                        <div className="absolute left-0 top-6 -ml-[16px] bottom-0 w-px bg-border md:hidden"></div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                             <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                             <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-secondary-foreground whitespace-nowrap">
                                {exp.period}
                             </span>
                        </div>
                        
                        <p className="text-primary font-medium text-sm mb-4">{exp.company} — {exp.title}</p>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {exp.description}
                        </p>

                        {exp.link && (
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline underline-offset-4"
                            >
                                {exp.linkText}
                                <FaExternalLinkAlt className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                 </div>
              </div>

              {/* Empty space for the other side of timeline */}
              <div className="flex-1 md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutClient;