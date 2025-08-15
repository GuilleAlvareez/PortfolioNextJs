"use client";
import { useState, useEffect } from 'react';
import { BrainCircuit, Code, Rocket, Zap, Users, Award } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Simplificamos las motivaciones para que sean más directas
  const motivations = [
    { icon: BrainCircuit, text: "Integración de IA" },
    { icon: Code, text: "Código Limpio y Escalable" },
    { icon: Rocket, text: "Creacion de agentes" },
    { icon: Zap, text: "Interfaces Intuitivas" },
    { icon: Users, text: "Colaboración Efectiva" },
    { icon: Award, text: "Aprendizaje Continuo" },
  ];

  // Hook para la animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optimización: deja de observar una vez visible
          }
        });
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="pt-20 px-6 relative overflow-hidden" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="about-title" className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4">
            Sobre Mí
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Mi pasión es transformar ideas complejas en experiencias digitales intuitivas, 
            combinando un código sólido con un diseño centrado en el usuario.
          </p>
        </div>

        {/* Contenedor principal de dos columnas */}
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Columna Izquierda: Mi Historia (Narrativa) */}
          <div className={`md:col-span-3 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Mi Viaje como Desarrollador Fullstack
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Mi aventura en el desarrollo web comenzó en el <strong className="font-semibold text-cyan-300">IES Hermanos Machado</strong> en Sevilla, 
                donde construí una base sólida en programación y las arquitecturas que dan vida a la web moderna. 
                Esta formación fue el trampolín que me lanzó al mundo profesional del desarrollo fullstack.
              </p>
              <p>
                En <strong className="font-semibold text-teal-300">SURLABS</strong>, tuve la oportunidad de aplicar mis conocimientos en un entorno real, 
                desarrollando plugins a medida para plataformas eLearning. Aprendí a transformar lo que el negocio necesita en soluciones técnicas que hacen más fácil y útil la experiencia para miles de usuarios, utilizando tecnologías modernas como React y Next.js.
              </p>
              <p>
                Actualmente, mi foco está en el ecosistema de <strong className="font-semibold text-cyan-300">React</strong> y en explorar 
                el potencial de la <strong className="font-semibold text-teal-300">Inteligencia Artificial</strong> para crear aplicaciones 
                más inteligentes y personalizadas. Como desarrollador fullstack con base en Sevilla, España, estoy comprometido con el desarrollo web moderno y las mejores prácticas de la industria.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Motivaciones y Disponibilidad (Visual y Escaneable) */}
          <div className={`md:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Sección de Motivaciones */}
            <div>
              <h3 className="text-2xl font-bold text-teal-300 mb-6">Lo que me impulsa</h3>
              <div className="grid grid-cols-2 gap-4">
                {motivations.map((motivation, index) => {
                  const Icon = motivation.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 transition-all duration-300 ease-in-out hover:border-teal-300 hover:shadow-md hover:shadow-teal-300/20 hover:scale-105 ">
                      <Icon className="w-5 h-5 text-teal-400 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-300 text-sm font-medium">{motivation.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sección de Disponibilidad */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Disponibilidad</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <div>
                    <div className="font-semibold">Sevilla, España</div>
                    <div className="text-xs text-gray-500">Abierto a trabajo remoto</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                  <span className="text-xl" aria-hidden="true">💼</span>
                  <div>
                    <div className="font-semibold">Disponible</div>
                    <div className="text-xs text-gray-500">Para nuevos proyectos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}