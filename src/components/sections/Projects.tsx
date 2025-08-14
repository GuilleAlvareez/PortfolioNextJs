import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ThunderMail",
      description:
        "Aplicación con IA para redactar y sugerir correos electrónicos personalizados, editables antes del envío automático. Proyecto principal que demuestra integración de inteligencia artificial con interfaces de usuario intuitivas.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "IA"],
      link: "https://thunder-mail.vercel.app",
      type: "featured",
    },
    {
      title: "PRzone",
      description:
        "Aplicación web completa desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web, que permite a los usuario llevar un control de sus entrenamientos en el gimnasio.",
      tags: ["React", "Node.js", "Express", "MySQL", "CSS"],
      link: "https://github.com/guillealvarez",
      type: "regular",
    },
  ];

  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Proyectos</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Aquí tienes una selección de mis proyectos más destacados, desde
          aplicaciones con IA hasta plugins para plataformas eLearning. Cada
          proyecto refleja mi pasión por crear soluciones técnicas innovadoras.
        </p>
      </div>

      {/* Layout mejorado con mayor espacio para las cards */}
      <div className="space-y-12 max-w-full mx-auto px-4">
        {/* Primer proyecto - Imagen a la derecha */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Info proyecto (lado izquierdo, más ancha) */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="p-8  rounded-lg h-full">
              <div className="text-left">
                <h4 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {projects[0].title}
                </h4>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="mb-6">
                  {projects[0].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-700 text-cyan-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-base transition-colors"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          </div>

          {/* Foto proyecto (lado derecho) */}
          <div className="relative w-full ml-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 bg-green-200">
            <Image
              src="/ThunderMail.png" // 📌 Nueva imagen optimizada en /public
              alt="ThunderMail"
              fill
              quality={100} // calidad máxima para evitar pixelado
              className="object-fill"
              priority // carga más rápido porque es visible al inicio
            />
          </div>
        </div>

        {/* Segundo proyecto - Imagen a la izquierda */}
        <div className="space-y-12 max-w-full mx-auto px-4">
        {/* Primer proyecto - Imagen a la derecha */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Info proyecto (lado izquierdo, más ancha) */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="p-8  rounded-lg h-full">
              <div className="text-left">
                <h4 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {projects[0].title}
                </h4>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="mb-6">
                  {projects[0].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-700 text-cyan-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-base transition-colors"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          </div>

          {/* Foto proyecto (lado derecho) */}
          <div className="relative w-full ml-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 bg-green-200">
            <Image
              src="/ThunderMail.png" // 📌 Nueva imagen optimizada en /public
              alt="ThunderMail"
              fill
              quality={100} // calidad máxima para evitar pixelado
              className="object-fill"
              priority // carga más rápido porque es visible al inicio
            />
          </div>
        </div>
      </div>
      </div>
      <div className="text-center pt-12">
        <a
          href="https://github.com/guillealvarez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-lg"
        >
          Ver todos mis proyectos en GitHub →
        </a>
      </div>
    </div>
  );
}
