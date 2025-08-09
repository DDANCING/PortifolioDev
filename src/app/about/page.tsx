import type { Metadata } from 'next'
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Conheça mais sobre Marcelo Mazzonetto, desenvolvedor Full Stack especializado em Node.js, React e React Native. Experiência em desenvolvimento web e mobile.',
  keywords: [
    'sobre marcelo mazzonetto',
    'desenvolvedor full stack',
    'experiência profissional',
    'habilidades técnicas',
    'node.js developer',
    'react developer',
    'react native',
    'desenvolvedor web',
    'desenvolvedor mobile'
  ],
  openGraph: {
    title: 'Sobre Marcelo Mazzonetto - Desenvolvedor Full Stack',
    description: 'Conheça mais sobre Marcelo Mazzonetto, desenvolvedor Full Stack especializado em Node.js, React e React Native.',
    url: '/about',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcelo Mazzonetto - Sobre Mim',
      },
    ],
  },
  twitter: {
    title: 'Sobre Marcelo Mazzonetto - Desenvolvedor Full Stack',
    description: 'Conheça mais sobre Marcelo Mazzonetto, desenvolvedor Full Stack especializado em Node.js, React e React Native.',
  },
}

const AboutPage = () => {
  return (
    <AboutClient />
  );
};

export default AboutPage;
