"use client";
import { useEffect, useState } from 'react';
import { BrainCircuit, Code, Server, Database } from 'lucide-react';
import 'devicon/devicon.min.css';

type Category = 'IA' | 'Frontend' | 'Backend' | 'Base de Datos';

const skillsData = {
  IA: [
    { name: 'Python', icon: 'devicon-python-plain' },
  ],
  Frontend: [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
  ],
  'Base de Datos': [
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'SQL', icon: 'devicon-postgresql-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  ],
};

const categoryIcons = {
  IA: BrainCircuit,
  Frontend: Code,
  Backend: Server,
  'Base de Datos': Database,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('Frontend');

  const categories: Category[] = ['Frontend', 'Backend', 'Base de Datos', 'IA'];

  // Efecto para leer la categoría de la URL al cargar la página
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromURL = urlParams.get('category') as Category;
    if (categoryFromURL && categories.includes(categoryFromURL)) {
      setActiveCategory(categoryFromURL);
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  // Efecto para actualizar la URL cuando la categoría activa cambia
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('category', activeCategory);
    // Usamos replaceState en lugar de pushState para no llenar el historial del navegador
    window.history.replaceState({}, '', url.toString());
  }, [activeCategory]); // Se ejecuta cada vez que 'activeCategory' cambia

  return (
    <div className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4">
          Habilidades Técnicas
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Un vistazo a las herramientas y tecnologías con las que construyo soluciones digitales.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <ul className="space-y-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;
              return (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`
                      w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300
                      ${isActive 
                        ? 'bg-cyan-500/10 border-l-4 border-cyan-400 text-white' 
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }
                    `}
                  >
                    <Icon className={`w-6 h-6 flex-shrink-0 transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className="font-semibold text-lg">{category}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div 
            key={activeCategory} // Clave para reiniciar la animación
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <div 
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <i className={`${skill.icon} text-4xl text-gray-300 group-hover:text-white transition-colors`}></i>
                <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h4>
              </div>
            ))}
            {skillsData[activeCategory].length === 0 && (
              <div className="col-span-full text-center text-gray-500 p-8 animate-fade-in">
                <p>Explorando activamente nuevas herramientas y tecnologías en esta área.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* El CSS de la animación debería estar en globals.css */}
    </div>
  );
}