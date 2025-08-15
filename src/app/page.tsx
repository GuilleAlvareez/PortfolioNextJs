import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Labs from '@/components/sections/Labs'
import Contact from '@/components/sections/Contact'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero Section - Contiene el único H1 */}
      <SectionWrapper id="hero" title=''>
        <Hero />
      </SectionWrapper>
      
      {/* About Section */}
      <section id="about" className='w-full mx-auto space-y-8'>
        <About />
      </section>

      {/* Projects Section */}
      <SectionWrapper id="projects" title="">
        <Projects />
      </SectionWrapper>
      
      {/* Experience Section */}
      <SectionWrapper id="experience" title="">
        <Experience />
      </SectionWrapper>
      
      {/* Skills Section */}
      <section id="skills" className='w-full mx-auto mb-30'>
        <Skills />
      </section>
      
      {/* Contact Section */}
      <SectionWrapper id="contact" title="">
        <Contact />
      </SectionWrapper>
    </main>
  )
}
