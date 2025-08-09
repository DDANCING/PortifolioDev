import type { Metadata } from 'next'
import Certifications from "./components/Certifications";
import Hero from "./components/hero";
import Projects from "./components/Projects";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Portfólio de Marcelo Mazzonetto - Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Explore meus projetos e certificações.',
  keywords: [
    'marcelo mazzonetto',
    'desenvolvedor full stack',
    'portfolio desenvolvedor',
    'react developer cascavel',
    'next.js developer',
    'typescript developer',
    'node.js developer',
    'desenvolvedor web paraná'
  ],
  openGraph: {
    title: 'Marcelo Mazzonetto - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack criando soluções modernas e eficientes com React, Next.js e Node.js.',
    url: '/',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcelo Mazzonetto - Desenvolvedor Full Stack',
      },
    ],
  },
}

export default function Home() {
  return (
   <>
   <Hero/>
   <Projects/>
   <Certifications/>
   </>
  );
}
