import type { Metadata } from 'next'
import ProjectsNew from '../components/ProjectsNew';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Explore os projetos desenvolvidos por Marcelo Mazzonetto. Soluções em e-commerce, sistemas web, aplicações React e muito mais.',
  keywords: [
    'projetos marcelo mazzonetto',
    'portfólio projetos',
    'e-commerce desenvolvimento',
    'projetos react',
    'projetos next.js',
    'aplicações web',
    'sistemas administrativos',
    'desenvolvimento frontend',
    'desenvolvimento backend'
  ],
  openGraph: {
    title: 'Projetos - Marcelo Mazzonetto',
    description: 'Explore os projetos desenvolvidos por Marcelo Mazzonetto. Soluções em e-commerce, sistemas web e aplicações modernas.',
    url: '/projects',
    images: [
      {
        url: '/projects/Ecommerce.png',
        width: 1200,
        height: 630,
        alt: 'Projetos de Marcelo Mazzonetto',
      },
    ],
  },
  twitter: {
    title: 'Projetos - Marcelo Mazzonetto',
    description: 'Explore os projetos desenvolvidos por Marcelo Mazzonetto. Soluções em e-commerce, sistemas web e aplicações modernas.',
  },
}

const ProjectsPage = () => {
    return (
        <div>
        <ProjectsNew/>
        </div>
    )
}

export default ProjectsPage;