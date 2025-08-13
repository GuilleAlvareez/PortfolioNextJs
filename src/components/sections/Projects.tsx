import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'ThunderMail',
      description: 'Aplicación con IA para redactar y sugerir correos electrónicos personalizados, editables antes del envío automático. Proyecto principal que demuestra integración de inteligencia artificial con interfaces de usuario intuitivas.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'IA'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'Plugins ILIAS - SURLABS',
      description: 'Desarrollo de plugins personalizados para la plataforma ILIAS, enfocados en mejorar la experiencia de aprendizaje en entornos eLearning corporativos y educativos.',
      tags: ['PHP', 'JavaScript', 'MySQL', 'ILIAS', 'eLearning'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'Portfolio Personal',
      description: 'Portfolio moderno y responsivo desarrollado con Next.js y Tailwind CSS, implementando las mejores prácticas de desarrollo frontend y diseño atómico.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'Proyecto de Estudios DAW',
      description: 'Aplicación web completa desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web, integrando frontend y backend modernos.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'CSS'],
      link: 'https://github.com/guillealvarez'
    }
  ]

  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-lg leading-relaxed">
        Aquí tienes una selección de mis proyectos más destacados, desde aplicaciones
        con IA hasta plugins para plataformas eLearning. Cada proyecto refleja mi
        pasión por crear soluciones técnicas innovadoras.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
      
      <div className="text-center pt-8">
        <a
          href="https://github.com/guillealvarez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          Ver todos mis proyectos en GitHub →
        </a>
      </div>
    </div>
  )
}
