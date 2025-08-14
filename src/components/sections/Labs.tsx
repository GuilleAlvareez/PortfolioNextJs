import ProjectCard from '@/components/ui/ProjectCard'

export default function Labs() {
  const experiments = [
    {
      title: 'Astro Performance Experiments',
      description: 'Explorando las capacidades de Astro para crear sitios web ultra-rápidos con hidratación selectiva y arquitectura de islas.',
      tags: ['Astro', 'TypeScript', 'Performance', 'SSG'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'React Component Library',
      description: 'Biblioteca de componentes reutilizables con diseño atómico, documentación automática y testing integrado.',
      tags: ['React', 'TypeScript', 'Storybook', 'Jest'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'eLearning UX Improvements',
      description: 'Experimentos de UX/UI para mejorar la experiencia de usuario en plataformas educativas, basado en mi experiencia en SURLABS.',
      tags: ['UX/UI', 'JavaScript', 'CSS', 'Accessibility'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'Modern CSS Techniques',
      description: 'Exploración de técnicas avanzadas de CSS como Container Queries, CSS Grid subgrid y nuevas propiedades de layout.',
      tags: ['CSS', 'Grid', 'Flexbox', 'Container Queries'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'TypeScript Advanced Patterns',
      description: 'Implementación de patrones avanzados de TypeScript para mejorar la type safety y developer experience.',
      tags: ['TypeScript', 'Design Patterns', 'Type Safety'],
      link: 'https://github.com/guillealvarez'
    },
    {
      title: 'Web Performance Optimization',
      description: 'Técnicas y herramientas para optimizar el rendimiento web: lazy loading, code splitting, y métricas Core Web Vitals.',
      tags: ['Performance', 'Webpack', 'Lighthouse', 'Web Vitals'],
      link: 'https://github.com/guillealvarez'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-gray-300 text-lg leading-relaxed">
          Mi laboratorio personal donde experimento con tecnologías como Astro,
          exploro técnicas avanzadas de React y TypeScript, y desarrollo soluciones
          innovadoras para mejorar la experiencia web.
        </p>
        
        <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-gray-400">Experimentando activamente</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* {experiments.map((experiment, index) => ( */}
          {/* // <ProjectCard */}
          {/* //   key={index}
          //   title={experiment.title}
          //   description={experiment.description}
          //   tags={experiment.tags}
          //   link={experiment.link}
          // />
        // ))} */}
      </div>
      
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          🧪 Próximos experimentos
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <h4 className="font-medium text-gray-200 mb-2">En desarrollo</h4>
            <ul className="space-y-1 text-sm">
              <li>• Optimización con Astro Islands</li>
              <li>• Componentes React avanzados</li>
              <li>• Mejoras UX para eLearning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-200 mb-2">Ideas en exploración</h4>
            <ul className="space-y-1 text-sm">
              <li>• Progressive Web Apps</li>
              <li>• Micro-interactions con CSS</li>
              <li>• Accessibility-first design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
