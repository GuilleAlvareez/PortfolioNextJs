import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'guillealvarezmoreno2@gmail.com',
      href: 'mailto:guillealvarezmoreno2@gmail.com',
      description: 'Respondo en 24 horas'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: '/in/guillermo-alvarez-moreno',
      href: 'https://linkedin.com/in/guillermo-alvarez-moreno',
      description: 'Conectemos profesionalmente'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@guillealvarez',
      href: 'https://github.com/guillealvarez',
      description: 'Revisa mi código'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+34 651 150 308',
      href: 'https://wa.me/34651150308',
      description: 'Para consultas rápidas'
    }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-gray-100">
          ¿Tienes un proyecto en mente?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Estoy abierto a nuevas oportunidades laborales, colaboraciones en proyectos
          interesantes o simplemente charlar sobre tecnología y desarrollo web.
          ¡No dudes en contactarme desde Sevilla o cualquier parte del mundo!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon
          return (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {method.label}
                  </h4>
                  <p className="text-gray-400 text-sm truncate">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {method.description}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg p-8 border border-cyan-400/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">
            ¿Prefieres un formulario de contacto?
          </h3>
          <p className="text-gray-300">
            También puedes enviarme un mensaje directo a través de cualquiera de mis redes sociales 
            o usar el email para consultas más detalladas.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <a
              href="mailto:guillealvarezmoreno2@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Enviar Email
            </a>
            <a
              href="https://linkedin.com/in/guillermo-alvarez-moreno"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2024 Guillermo Álvarez Moreno. Desarrollado con ❤️ usando Next.js y Tailwind CSS desde Sevilla.
        </p>
      </div>
    </div>
  )
}
