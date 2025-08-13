export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full min-h-screen pt-16">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Guillermo Álvarez Moreno
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl">
          Desarrollador Fullstack especializado en React y tecnologías web modernas
        </p>

        <p className="text-lg text-gray-400 max-w-xl">
          Apasionado por crear experiencias web modernas y fluidas, con interés en arquitecturas
          innovadoras como Astro para optimizar rendimiento.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            CV
          </a>
          
          <a
            href="#projects"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}
