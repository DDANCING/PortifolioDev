
import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Marcelo Mazzonetto para discutir projetos, oportunidades de trabalho ou colaborações. Desenvolvedor Full Stack pronto para novos desafios.',
  keywords: [
    'contato marcelo mazzonetto',
    'contato desenvolvedor',
    'orçamento desenvolvimento',
    'freelancer full stack',
    'contato projetos web',
    'desenvolvedor para contratação',
    'serviços desenvolvimento',
    'consultoria desenvolvimento'
  ],
  openGraph: {
    title: 'Contato - Marcelo Mazzonetto',
    description: 'Entre em contato com Marcelo Mazzonetto para discutir projetos e oportunidades de desenvolvimento.',
    url: '/contact',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Contato Marcelo Mazzonetto',
      },
    ],
  },
  twitter: {
    title: 'Contato - Marcelo Mazzonetto',
    description: 'Entre em contato com Marcelo Mazzonetto para discutir projetos e oportunidades de desenvolvimento.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
