'use client'

import { useEffect, useState, } from 'react'

export default function NavBar() {
  // Controla la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Almacena la posición actual del scroll para efectos visuales
  const [scrollY, setScrollY] = useState(0)
  // Rastrea qué sección está actualmente visible
  const [activeSection, setActiveSection] = useState('hero')

  // Maneja el evento de scroll para mostrar/ocultar la navbar
  const handleScroll = () => {
    setScrollY(window.scrollY)

    // Si estamos en la parte superior, marcar hero como activo
    if (window.scrollY < 100) {
      setActiveSection('hero')
    }
  }

  // Añade listener de scroll al montar y lo elimina al desmontar
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Intersection Observer para detectar automáticamente qué sección está visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Ajusta el margen para detectar mejor las secciones
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          // Solo actualizar si es una sección válida del navbar
          const validSections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact']
          if (validSections.includes(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observar todas las secciones del documento
    const sections = document.querySelectorAll('section[id], div[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Cerrar menú móvil al presionar Escape para mejor UX
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  // Configuración de elementos de navegación
  const navItems = [
    { href: '#hero', label: 'Inicio', id: 'hero' },
    { href: '#about', label: 'Sobre Mí', id: 'about' },
    { href: '#projects', label: 'Proyectos', id: 'projects' },
    { href: '#experience', label: 'Trayectoria', id: 'experience' },
    { href: '#skills', label: 'Habilidades', id: 'skills' },
    { href: '#contact', label: 'Contacto', id: 'contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300 ${scrollY !== 0 ? 'opacity-100 translate-y-0' : '-translate-y-full'}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        {/* Logo/Name */}
        <a 
          href="#hero" 
          className="font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Ir al inicio del portfolio"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6" role="menubar">
          {navItems.map((item) => (
            <li key={item.href} role="none" className='group relative'>
            <a
              href={item.href}
              className={`block transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-3 py-2 ${
                activeSection === item.id 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 group-hover:text-cyan-400'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              {item.label}
            </a>
            <span className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-cyan-400 transition-all duration-300 ease-out ${
              activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800"
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <ul className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className={`block py-2 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 ${
                    activeSection === item.id 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}