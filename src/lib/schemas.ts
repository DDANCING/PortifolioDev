export const personalSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Marcelo Mazzonetto",
  "jobTitle": "Desenvolvedor Full Stack",
  "description": "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js",
  "url": "https://marcelomazzonetto.vercel.app",
  "sameAs": [
    "https://github.com/DDANCING",
    "https://linkedin.com/in/marcelo-mazzonetto"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cascavel",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "email": "mmazzonetto17@gmail.com",
  "telephone": "+5545999607717",
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
    "AWS"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Marcelo Mazzonetto Portfolio",
  "description": "Portfólio profissional de Marcelo Mazzonetto, desenvolvedor Full Stack",
  "url": "https://marcelomazzonetto.vercel.app",
  "author": {
    "@type": "Person",
    "name": "Marcelo Mazzonetto"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://marcelomazzonetto.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Marcelo Mazzonetto - Desenvolvimento Web",
  "description": "Serviços de desenvolvimento web e mobile especializado em React, Next.js e Node.js",
  "url": "https://marcelomazzonetto.vercel.app",
  "telephone": "+5545999607717",
  "email": "mmazzonetto17@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cascavel",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "founder": {
    "@type": "Person",
    "name": "Marcelo Mazzonetto"
  },
  "areaServed": "BR",
  "serviceType": [
    "Desenvolvimento Web",
    "Desenvolvimento de E-commerce",
    "Desenvolvimento de Aplicações React",
    "Desenvolvimento Backend Node.js"
  ]
}
