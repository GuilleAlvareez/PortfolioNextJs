export default function Projects() {
  const projects = [
    {
      title: 'ThunderMail',
      description:
        'Aplicación con IA para redactar y sugerir correos electrónicos personalizados, editables antes del envío automático. Proyecto principal que demuestra integración de inteligencia artificial con interfaces de usuario intuitivas.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'IA'],
      link: 'https://github.com/guillealvarez',
    },
    {
      title: 'PRzone',
      description:
        'Aplicación web completa desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web, que permite a los usuario llevar un control de sus entrenamientos en el gimnasio.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'CSS'],
      link: 'https://github.com/guillealvarez',
    },
  ];

  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-lg leading-relaxed">
        Aquí tienes una selección de mis proyectos más destacados, desde
        aplicaciones con IA hasta plugins para plataformas eLearning. Cada
        proyecto refleja mi pasión por crear soluciones técnicas innovadoras.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-700 text-cyan-400 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Ver proyecto →
            </a>
          </div>
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
  );
}
