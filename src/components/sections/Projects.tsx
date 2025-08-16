"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  // Hook para la animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ThunderMail",
      description:
        "Aplicación con IA para redactar y sugerir correos electrónicos personalizados, editables antes del envío automático. Proyecto principal que demuestra integración de inteligencia artificial con interfaces de usuario intuitivas.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "IA"],
      link: "https://thunder-mail.vercel.app",
      type: "featured",
    },
    {
      title: "PRzone",
      description:
        "Aplicación web completa desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web, que permite a los usuario llevar un control de sus entrenamientos en el gimnasio.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "IA"],
      link: "https://github.com/guillealvarez",
      type: "regular",
    },
  ];

  return (
    <section id="projects" className="max-w-screen-2xl mx-auto mt-20">
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="h-24 text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent ">
          Proyectos
        </h2>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Una selección de mis trabajos más destacados, desde aplicaciones con IA hasta soluciones web completas
        </p>
      </div>

      {/* Layout mejorado con mayor espacio para las cards */}
      <div className="space-y-16 max-w-full mx-auto px-4">
        {/* Primer proyecto - Imagen a la derecha */}
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Info proyecto (lado izquierdo, más ancha) */}
          <div className="flex-1 lg:max-w-3xl transform transition-all duration-500 group-hover:translate-x-2">
            <div className="p-8 rounded-lg h-full">
              <div className="text-left">
                <h4 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6 transition-all duration-300 tracking-tight">
                  {projects[0].title}
                </h4>
                <p className="text-gray-300 text-base mb-8 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[0].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-sm hover:shadow-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-all duration-300 hover:gap-3 group/link"
                >
                  Ver proyecto 
                  <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Foto proyecto (lado derecho) */}
          <div className="relative w-full ml-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-xl border border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 bg-green-200 transform group-hover:scale-105 group-hover:-translate-x-2">
            <Image
              src="/ThunderMail.png"
              alt="ThunderMail"
              fill
              quality={100}
              className="object-cover transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Segundo proyecto - Imagen a la izquierda */}
        <div className={`flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Info proyecto (lado derecho) */}
          <div className="flex-1 lg:max-w-3xl lg:ml-5 transform transition-all duration-500 group-hover:-translate-x-2">
            <div className="p-8 rounded-lg h-full">
              <div className="text-left">
                <h4 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6 transition-all duration-300 tracking-tight">
                  {projects[1].title}
                </h4>
                <p className="text-gray-300 text-base mb-8 leading-relaxed">
                  {projects[1].description}
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[1].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-sm hover:shadow-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-all duration-300 hover:gap-3 group/link"
                >
                  Ver proyecto 
                  <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full mr-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-xl border border-gray-700  transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 bg-blue-200 transform group-hover:scale-105 group-hover:translate-x-2">
            <Image
              src="/ThunderMail.png"
              alt="PRzone"
              fill
              quality={100}
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
      
      <div className={`text-center pt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="https://github.com/GuilleAlvareez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300 text-lg hover:gap-4 group bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-3 rounded-full border border-gray-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
        >
          Ver todos mis proyectos en GitHub 
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}