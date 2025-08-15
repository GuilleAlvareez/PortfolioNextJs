import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Labs from '@/components/sections/Labs'
import Contact from '@/components/sections/Contact'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      <SectionWrapper id="hero" title=''>
        <Hero />
      </SectionWrapper>
      
      <div id="about" title='' className='w-full mx-auto space-y-8'>
        <About />
      </div>
      
      {/* <SectionWrapper id="about" title=''>
        <About />
      </SectionWrapper> */}

      <SectionWrapper id="projects" title="">
        <Projects />
      </SectionWrapper>
      
      <SectionWrapper id="experience" title="">
        <Experience />
      </SectionWrapper>
      
      {/* <SectionWrapper id="labs" title="">
        <Labs />
      </SectionWrapper>*/}
      
      <SectionWrapper id="contact" title="">
        <Contact />
      </SectionWrapper>
    </main>
  )
}
