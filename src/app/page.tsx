import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/sections/Hero'
import SectionWrapper from '@/components/ui/SectionWrapper'
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'));
const Projects = dynamic(() => import('@/components/sections/Projects'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Barra de navegación fija en la parte superior */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}
