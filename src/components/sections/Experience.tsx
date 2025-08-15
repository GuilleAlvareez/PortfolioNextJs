import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      date: "Mar 2025 - Jun 2025",
      title: "Fullstack Developer",
      company: "SURLABS (Dos Hermanas)",
      description:
        "Desarrollo de plugins personalizados para la plataforma ILIAS, enfocado en mejorar la experiencia de aprendizaje en entornos eLearning. Trabajo en equipo con metodologías ágiles y enfoque en la calidad del código.",
      type: "work",
    },
    {
      date: "Sep 2023 - Jun 2025",
      title: "Desarrollo de Aplicaciones Web",
      company: "IES Hermanos Machado",
      description:
        "Formación integral en desarrollo web fullstack, abarcando desde fundamentos de programación hasta tecnologías modernas como React, Django y bases de datos. Desarrollo de proyectos prácticos y colaborativos.",
      type: "education",
    },
  ];

  return (
    <div className="space-y-12 mt-24 max-w-screen-2xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        {" "}
        {/* Más espacio abajo y entre elementos */}
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent tracking-tighter">
          Trayectoria
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Una combinación de formación académica sólida y experiencia práctica
          que define mi perfil como desarrollador.
        </p>
      </div>
      
      {/* Timeline sin cards */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Línea vertical principal */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-teal-400 rounded-full timeline-line"></div>
        <div className="space-y-16 timeline-container">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative flex group timeline-item ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } group`}
            >
              {/* Punto en la línea temporal */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-gray-900 z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-cyan-400/50"></div>

              {/* Contenido de experiencia */}
              <div
                className={`w-full md:w-5/12 pl-16 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } transform transition-all duration-500 ${
                  index % 2 === 0
                    ? "group-hover:translate-x-2"
                    : "group-hover:-translate-x-2"
                }`}
              >
                {/* Fecha con estilo mejorado */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      experience.type === "work"
                        ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30"
                        : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {experience.type === "work" ? "💼" : "🎓"} {experience.date}
                  </span>
                </div>

                {/* Título con gradiente */}
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-3 transition-all duration-300">
                  {experience.title}
                </h3>

                {/* Empresa */}
                <h4 className="text-xl text-gray-300 font-semibold mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {experience.company}
                </h4>

                {/* Descripción */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carta de recomendación sin card */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 border border-secondary rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Encabezado */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/surlabs-logo.png"
              alt="SURLABS Logo"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-2xl font-bold text-white">
                Carta de Recomendación
              </h3>
              <p className="text-lg text-cyan-400 font-semibold">SURLABS</p>
            </div>
          </div>

          {/* Cita y Autores */}
          <blockquote className="relative pl-6 border-l-2 border-accent mb-8">
            <p className="text-gray-200 text-lg italic leading-relaxed">
              "Recomendamos encarecidamente a Guillermo por su profesionalidad,
              responsabilidad y compromiso. Destacamos su proactividad,
              capacidad de trabajo en equipo y disposición para aprender."
            </p>
          </blockquote>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10 pl-6">
            <p className="text-gray-400">
              <strong className="font-semibold text-white">
                Daniel Cazalla Vázquez
              </strong>{" "}
              - CTO
            </p>
            <p className="text-gray-400">
              <strong className="font-semibold text-white">
                Jesús Copado Mejías
              </strong>{" "}
              - CEO
            </p>
          </div>

          {/* Logros como lista de verificación */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">
              Logros Destacados:
            </h4>
            {[
              "Dominio en frontend y backend con especial capacidad de análisis",
              "Excelente integración y contribución positiva al equipo",
              "Desarrollo de plugins personalizados para plataformas eLearning",
              "Enfoque en mejorar la experiencia de usuario en entornos educativos",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
