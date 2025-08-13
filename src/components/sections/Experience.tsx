import ExperienceItem from '@/components/ui/ExperienceItem'

export default function Experience() {
  const experiences = [
    {
      date: 'Sep 2023 - Jun 2025',
      title: 'Desarrollo de Aplicaciones Web',
      company: 'IES Hermanos Machado',
      description: 'Formación integral en desarrollo web fullstack, abarcando desde fundamentos de programación hasta tecnologías modernas como React, Node.js y bases de datos. Desarrollo de proyectos prácticos y colaborativos.'
    },
    {
      date: 'Mar 2025 - Jun 2025',
      title: 'Fullstack Developer',
      company: 'SURLABS (Dos Hermanas)',
      description: 'Desarrollo de plugins personalizados para la plataforma ILIAS, enfocado en mejorar la experiencia de aprendizaje en entornos eLearning. Trabajo en equipo con metodologías ágiles y enfoque en la calidad del código.'
    }
  ]

  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-lg leading-relaxed">
        Mi trayectoria combina formación académica sólida con experiencia práctica
        en el desarrollo de software. Enfocado en el aprendizaje continuo y la
        aplicación de tecnologías modernas en proyectos reales.
      </p>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          Carta de Recomendación - SURLABS
        </h3>
        <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
          <p className="text-gray-300 italic mb-3">
            "Recomendamos encarecidamente a Guillermo por su profesionalidad, responsabilidad y compromiso.
            Destacamos su proactividad, capacidad de trabajo en equipo y disposición para aprender."
          </p>
          <div className="text-sm text-gray-400">
            <p><strong>Daniel Cazalla Vázquez</strong> - CTO, SURLABS</p>
            <p><strong>Jesús Copado Mejías</strong> - CEO, SURLABS</p>
          </div>
        </div>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-3 mt-1">▸</span>
            Buen dominio en frontend y backend con especial capacidad de análisis
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-3 mt-1">▸</span>
            Excelente integración en el equipo y contribución positiva al ambiente de trabajo
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-3 mt-1">▸</span>
            Desarrollo de plugins personalizados para plataformas eLearning
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-3 mt-1">▸</span>
            Enfoque en mejorar la experiencia de usuario en entornos educativos
          </li>
        </ul>
      </div>
    </div>
  )
}
