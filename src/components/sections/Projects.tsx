"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HelpCircle } from "lucide-react";
import Modal from "../ui/Modal";

export default function Projects() {
  // Controla la animación de entrada de la sección
  const [isVisible, setIsVisible] = useState(false);
  // Controla la visibilidad del modal explicativo
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Intersection Observer para activar animaciones cuando la sección es visible
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Configuración de proyectos destacados y regulares
  const projects = [
    {
      title: "ThunderMail",
      description:
        "Aplicación con IA para redactar y sugerir correos electrónicos personalizados, editables antes del envío automático. Proyecto principal que demuestra integración de inteligencia artificial con interfaces de usuario intuitivas.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "IA",
      ],
      link: "https://github.com/GuilleAlvareez/ThunderMail.git",
      type: "featured",
    },
    {
      title: "PRzone",
      description:
        "Aplicación web completa desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web, que permite a los usuario llevar un control de sus entrenamientos en el gimnasio.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "IA"],
      link: "https://przone.vercel.app",
      linkCode: "https://github.com/guillealvarez",
      type: "regular",
    },
  ];

  return (
    <section id="projects" className="max-w-screen-2xl mx-auto mt-20">
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="h-24 text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent ">
          Proyectos
        </h2>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Una selección de mis trabajos más destacados, desde aplicaciones con
          IA hasta soluciones web completas
        </p>
      </div>

      {/* Layout mejorado con mayor espacio para las cards */}
      <div className="space-y-16 max-w-full mx-auto px-4">
        {/* Primer proyecto - Imagen a la derecha */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Info proyecto (lado izquierdo, más ancha) */}
          <div className="flex-1 lg:max-w-3xl transform transition-all duration-500">
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
                <div className="flex items-center gap-4">
                  <a
                    href={projects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-all duration-300 hover:gap-3 group/link"
                  >
                    Ver codigo  
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* Botón del modal para proyectos que solo tienen enlace a GitHub */}
                  {projects[0].link.includes("github") && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                    >
                      <HelpCircle size={16} />
                      ¿Por qué no está desplegado?
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Foto proyecto (lado derecho) */}
          <div className="relative w-full ml-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-xl border border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 bg-green-200 transform">
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
        <div
          className={`flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 group transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Info proyecto (lado derecho) */}
          <div className="flex-1 lg:max-w-3xl lg:ml-5 transform transition-all duration-500">
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
                <div className="flex items-center gap-4">
                  <a
                    href={projects[1].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base transition-all duration-300 hover:gap-3 group/link"
                  >
                    Ver proyecto
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full mr-auto lg:w-[700px] h-[300px] lg:h-[350px] overflow-hidden rounded-xl border border-gray-700  transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 bg-blue-200 transform">
            <Image
              src="/PRzone.png"
              alt="PRzone"
              fill
              quality={100}
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <div
        className={`text-center px-2 mt-12 md:mt-0 md:pt-16 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <a
          href="https://github.com/GuilleAlvareez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300 text-lg hover:gap-4 group bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-3 rounded-full border border-gray-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
        >
          Ver todos mis proyectos en GitHub
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Modal explicativo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¿Por qué este proyecto no está desplegado?"
      >
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            Este proyecto,{" "}
            <span className="text-cyan-400 font-semibold">ThunderMail</span>,
            incluye una funcionalidad de backend diseñada para que los usuarios
            puedan enviar correos electrónicos generados por IA directamente
            desde la aplicación.
          </p>
          <p className="leading-relaxed">
            Durante el desarrollo, identifiqué un conflicto fundamental entre la
            flexibilidad que quería ofrecer y las prácticas de seguridad
            estándar. La versión inicial permitía que el campo del remitente
            (from) fuera definido por el usuario. Sin embargo, esto crea una
            grave vulnerabilidad de seguridad conocida como suplantación de
            identidad (email spoofing), que permitiría a un usuario
            malintencionado enviar correos haciéndose pasar por otra persona.
          </p>
          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-cyan-400 font-medium mb-2">
              ¡Te invito a explorar el código fuente completo para ver la
              implementación en detalle!
            </p>
            <a
              href="https://github.com/GuilleAlvareez/ThunderMail.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300 hover:gap-3 group/link"
            >
              Ver en GitHub
              <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
