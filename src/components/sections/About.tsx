export default function About() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Node.js',
    'Express', 'PHP', 'Python', 'Java', 'MySQL', 'PostgreSQL'
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            Desarrollador apasionado por crear experiencias web modernas y fluidas,
            especializado en React y con interés en arquitecturas innovadoras como
            Astro para optimizar rendimiento. Actualmente cursando Desarrollo de
            Aplicaciones Web en IES Hermanos Machado.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Motivado por desafíos técnicos y transformar ideas complejas en interfaces
            intuitivas y accesibles. Mi enfoque se centra en el desarrollo fullstack
            con especial atención al frontend, buscando siempre la mejor experiencia
            de usuario posible.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Mi experiencia profesional en SURLABS me ha permitido desarrollar plugins
            personalizados para plataformas eLearning, mejorando la experiencia de
            aprendizaje y trabajando en equipo de manera proactiva.
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Tecnologías que domino
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-cyan-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Lo que me motiva
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Transformar ideas complejas en interfaces intuitivas
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Optimizar rendimiento con arquitecturas innovadoras
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Trabajar en equipo y contribuir positivamente
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Información adicional
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span><strong>Ubicación:</strong> Sevilla, España</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span><strong>Idiomas:</strong> Español (Nativo), Inglés (Conversacional)</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span><strong>Disponibilidad:</strong> Abierto a oportunidades remotas y presenciales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
