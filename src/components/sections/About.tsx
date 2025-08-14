"use client";
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const motivations = [
    {
      title: "Interfaces Intuitivas",
      description: "Crear experiencias de usuario que sean naturales y accesibles"
    },
    {
      title: "Soluciones con IA",
      description: "Integrar inteligencia artificial para mejorar la funcionalidad"
    },
    {
      title: "Creación de Agentes",
      description: "Desarrollar sistemas automatizados inteligentes"
    },
    {
      title: "Rendimiento Optimizado", 
      description: "Desarrollar aplicaciones rápidas y eficientes"
    },
    {
      title: "Aprendizaje Continuo",
      description: "Mantenerme actualizado con las últimas tecnologías"
    },
    {
      title: "Colaboración Efectiva",
      description: "Trabajar en equipo para lograr objetivos comunes"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about-section" className="bg-gray-900 py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/8 to-teal-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4">
            Sobre Mí
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desarrollador FullStack apasionado por crear experiencias digitales únicas
          </p>
        </div>

        {/* 1. Mi Historia */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-2 border-cyan-400/50 rounded-3xl p-10 shadow-2xl shadow-cyan-400/10">
            <div className="flex items-center mb-8">
              <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-4 animate-pulse"></div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Mi Historia
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-cyan-300">Formación</h4>
                <p className="leading-relaxed">
                  He finalizado el ciclo de <span className="text-cyan-400 font-semibold">Desarrollo de Aplicaciones Web</span> en 
                  IES Hermanos Machado, donde desarrollé una base sólida en programación y diseño web.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-teal-300">Especialización</h4>
                <p className="leading-relaxed">
                  Me especializo en <span className="text-teal-400 font-semibold">React</span> y todo su ecosistema, aparte de otras tecnologías web modernas, 
                  con enfoque en crear <span className="text-cyan-400 font-semibold">experiencias web fluidas y optimizadas</span>.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-cyan-300">Experiencia</h4>
                <p className="leading-relaxed">
                  Mi trabajo en <span className="text-teal-400 font-semibold">SURLABS</span> me ha permitido 
                  desarrollar plugins personalizados para plataformas eLearning, mejorando la experiencia de usuarios reales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Motivaciones */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-teal-400/40 rounded-3xl p-10 shadow-2xl shadow-teal-400/10">
            <div className="flex items-center mb-8">
              <div className="w-5 h-5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mr-4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Lo que me motiva
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {motivations.map((motivation, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mt-1 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-teal-300 mb-2 group-hover:text-teal-200 transition-colors duration-300">
                        {motivation.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {motivation.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Información Personal */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 rounded-xl p-8 hover:border-teal-400/30 transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-teal-400 rounded-full mr-4"></div>
              <h4 className="text-2xl font-bold text-teal-400">Ubicación & Disponibilidad</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📍</span>
                <div className="font-medium text-gray-300">Sevilla, España</div>
                <div className="text-sm text-gray-400">CET (UTC+1)</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">💼</span>
                <div className="font-medium text-gray-300">Disponible</div>
                <div className="text-sm text-gray-400">Nuevos proyectos</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🌐</span>
                <div className="font-medium text-gray-300">Flexible</div>
                <div className="text-sm text-gray-400">Remoto/Presencial</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/30 rounded-full px-6 py-3 text-sm text-cyan-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            ¿Quieres conocer más sobre mi trabajo?
          </div>
        </div>
      </div>
    </div>
  );
}