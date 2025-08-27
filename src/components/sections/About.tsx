"use client";
import { useState, useEffect } from 'react';
import { BrainCircuit, Code, Rocket, Zap, Users, Award } from 'lucide-react';
import { useT } from '@/contexts/TranslationContext';

export default function About() {
  const t = useT();

  // Controla la animación de entrada de la sección
  const [isVisible, setIsVisible] = useState(false);

  // Configuración de motivaciones profesionales con iconos
  const motivations = [
    { icon: BrainCircuit, text: t('about_motivation_ai') },
    { icon: Code, text: t('about_motivation_clean_code') },
    { icon: Rocket, text: t('about_motivation_agents') },
    { icon: Zap, text: t('about_motivation_interfaces') },
    { icon: Users, text: t('about_motivation_collaboration') },
    { icon: Award, text: t('about_motivation_learning') },
  ];

  // Intersection Observer para activar animaciones cuando la sección es visible
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pt-20 px-6 relative overflow-hidden" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="about-title" className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4">
            {t('about_title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('about_subtitle')}
          </p>
        </div>

        {/* Contenedor principal de dos columnas */}
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Columna Izquierda: Mi Historia (Narrativa) */}
          <div className={`md:col-span-3 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {t('about_journey_title')}
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about_paragraph_1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about_paragraph_2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about_paragraph_3') }} />
            </div>
          </div>

          {/* Columna Derecha: Motivaciones y Disponibilidad (Visual y Escaneable) */}
          <div className={`md:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Sección de Motivaciones */}
            <div>
              <h3 className="text-2xl font-bold text-teal-300 mb-6">{t('about_motivations_title')}</h3>
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
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">{t('about_availability_title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <div>
                    <div className="font-semibold">{t('about_location')}</div>
                    <div className="text-xs text-gray-500">{t('about_remote_work')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                  <span className="text-xl" aria-hidden="true">💼</span>
                  <div>
                    <div className="font-semibold">{t('about_status')}</div>
                    <div className="text-xs text-gray-500">{t('about_status_description')}</div>
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