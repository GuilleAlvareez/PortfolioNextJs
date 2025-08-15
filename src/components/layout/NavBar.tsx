'use client'

import { useEffect, useState, } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Cerrar menú móvil al presionar Escape
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

  const navItems = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#experience', label: 'Trayectoria' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contacto' },
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
          {navItems.map((item, index) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                role="menuitem"
                tabIndex={0}
              >
                {item.label}
              </a>
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
            {navItems.map((item, index) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2"
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