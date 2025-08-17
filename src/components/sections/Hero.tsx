"use client";
import { useState, useEffect } from 'react';
// Importa los iconos de lucide-react para un código más limpio
import { Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center text-center h-full min-h-screen pt-16 overflow-hidden px-4 md:px-0" aria-labelledby="hero-title">
      {/* ... (tus efectos de fondo se mantienen igual) ... */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" aria-hidden="true"/>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-20 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20" aria-hidden="true"></div>

      {/* --- INICIO DE LA CORRECCIÓN --- */}
      {/* 
        Contenido principal. Le añadimos un padding inferior (pb-24) 
        para asegurarnos de que siempre haya espacio para el indicador de scroll.
      */}
      <div className={`relative z-10 space-y-8 transition-all duration-1000 pb-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 rounded-full px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
          Disponible para nuevos proyectos
        </div>

        {/* Name */}
        <div className="space-y-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
              Guillermo
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Álvarez Moreno
            </span>
          </h1>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" aria-hidden="true"></div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium leading-relaxed">
            Desarrollador <span className="text-cyan-400 font-bold">Fullstack</span> especializado en{' '}
            <span className="text-teal-400 font-bold">React</span> y tecnologías web modernas
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed px-4">
            Apasionado por crear experiencias web <span className="text-cyan-300">modernas y fluidas</span>, 
            con interés en arquitecturas innovadoras como{' '}
            <span className="text-teal-300 font-semibold">Next.js</span> para optimizar rendimiento.
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/CV.pdf" 
            download="Guillermo Álvarez Moreno - CV.pdf"
            className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform"
            aria-label="Descargar CV de Guillermo Álvarez Moreno"
          >
            <span className="relative z-10">Descargar CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-300" aria-hidden="true"></div>
          </a>
          <a
            href="#projects"
            className="group relative border-2 border-cyan-400 text-cyan-400 hover:text-gray-900 font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:border-transparent hover:shadow-xl hover:scale-105 transform backdrop-blur-sm"
            aria-label="Ver proyectos de Guillermo Álvarez Moreno"
          >
            <span className="relative z-10">Ver Proyectos</span>
          </a>
        </div>

        {/* Social links - Se mantienen en el flujo normal del documento */}
        <nav className="flex justify-center gap-6 pt-4" aria-label="Enlaces sociales">
          <a 
            href="https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/" 
            target='_blank' 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Perfil de LinkedIn de Guillermo Álvarez Moreno"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/GuilleAlvareez" 
            target='_blank' 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Perfil de GitHub de Guillermo Álvarez Moreno"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </nav>
      </div>
      
      {/* 
        Indicador de scroll. 
        Sigue siendo absoluto, pero el padding del contenedor padre le da espacio.
      */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      {/* --- FIN DE LA CORRECCIÓN --- */}
    </section>
  );
}