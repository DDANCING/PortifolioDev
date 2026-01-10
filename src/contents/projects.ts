import { Project } from "@/types";

// Função privada para verificar se deve esconder o botão de código
function shouldHideCode(projectTitle: string): boolean {
  return projectTitle === 'Cris Mazzonetto';
}

export const projects: Project[] = [
    {
        title: 'ProjectA',
        description: 'ProjectA is an innovative music school that employs effective teaching methods to provide a comprehensive and immersive learning experience.',
        technologies: ['Next.js', 'TypeScript', 'Node.js', 'AI', 'Python', 'Tailwind CSS', 'Stripe', 'Prisma', 'Shadcn/ui', 'three.js', 'Auth.js v5'],
        githubLink: 'https://github.com/DDANCING/ProjectA',
        demoLink: 'https://projecta-marcelo-mazzonettos-projects.vercel.app/',
        image: '/projects/projecta.png',
      },
       {
        title: 'Toctok',
        description: 'Toctok is an innovative platform inspired by the TikTok format, but focused on the real estate market.',
        technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Prisma', 'Shadcn/ui', 'Auth.js v5'], 
        githubLink: 'https://github.com/DDANCING/toctok',
        demoLink: 'https://toctok.vercel.app/',
        image: '/projects/toctok.png',
      },
      {
        title: 'E-commerce',
        description: 'E-commerce is a platform that allows users to buy and sell products online, providing a seamless shopping experience.',
        technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Prisma', 'Shadcn/ui', 'Auth.js v5', 'Stripe', 'React Hook Form', 'Zod', 'Axios', 'PWA'], 
        githubLink: 'https://github.com/DDANCING/ecommerce',
        demoLink: 'https://ecommerce-git-dev-marcelo-mazzonettos-projects.vercel.app/',
        image: '/projects/Ecommerce.png',
      },
      {
        title: 'Cris Mazzonetto',
        description: 'Cris Mazzonetto é um atelier e loja exclusiva de vestidos de noiva e festa, oferecendo designs sofisticados e tecidos nobres com foco na elegância e atendimento personalizado.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Zod'],
        githubLink: 'https://github.com/DDANCING/cris-mazzonetto',
        demoLink: 'http://www.crismazzonetto.com.br/',
        image: '/projects/crismazzonetto.png',
        hideCode: shouldHideCode('Cris Mazzonetto'),
      },
      {
    title: 'Comm',
    description: 'Uma plataforma SaaS de suporte ao cliente impulsionada por IA que implanta agentes inteligentes para resolver consultas 24/7, transformando conversas em conversões com análises em tempo real.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Shadcn/ui', 'Framer Motion', 'Prisma', 'PostgreSQL'],
    githubLink: 'https://github.com/DDANCING/comm-web',
    demoLink: 'https://comm-web-theta.vercel.app/',
    image: '/projects/comm.png',
  },
      {
        title: 'Tcar Imports',
        description: 'Tcar Imports é uma vitrine digital para uma concessionária de veículos de luxo, destacando uma coleção de automóveis de alto padrão com foco em excelência e qualidade.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui'],
        githubLink: 'https://github.com/DDANCING/tcar',
        demoLink: 'https://tcar-iota.vercel.app/',
        image: '/projects/tcar.png',
      },
 ];
  