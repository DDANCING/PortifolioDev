import type { Metadata } from 'next'
import Certifications from "../components/Certifications"

export const metadata: Metadata = {
  title: 'Certificações',
  description: 'Veja as certificações e cursos concluídos por Marcelo Mazzonetto em desenvolvimento web, tecnologias modernas e melhores práticas de programação.',
  keywords: [
    'certificações marcelo mazzonetto',
    'cursos desenvolvimento',
    'certificados programação',
    'formação desenvolvedor',
    'educação continuada',
    'cursos tecnologia',
    'certificações web development',
    'treinamentos programação'
  ],
  openGraph: {
    title: 'Certificações - Marcelo Mazzonetto',
    description: 'Veja as certificações e cursos concluídos por Marcelo Mazzonetto em desenvolvimento e tecnologia.',
    url: '/Certifications',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Certificações Marcelo Mazzonetto',
      },
    ],
  },
  twitter: {
    title: 'Certificações - Marcelo Mazzonetto',
    description: 'Veja as certificações e cursos concluídos por Marcelo Mazzonetto em desenvolvimento e tecnologia.',
  },
}

const BlogsPage = () => {
  
  return (
    <Certifications/>
  )
}

export default BlogsPage