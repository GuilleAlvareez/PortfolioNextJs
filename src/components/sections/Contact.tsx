"use client";
import { useState, useEffect } from 'react';
// Importación de iconos de lucide-react
import { Mail, Linkedin, Github, MessageCircle, User, MessageSquare, Send, CheckCircle, X } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  // Función para mostrar notificación
  const showNotificationMessage = (message: string, type: 'success' | 'error') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  // Array de métodos de contacto actualizado con iconos de Lucide
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guillealvarezmoreno2@gmail.com',
      href: 'mailto:guillealvarezmoreno2@gmail.com',
      description: 'Respondo en 24 horas'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Guillermo Álvarez Moreno',
      href: 'https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/',
      description: 'Conectemos profesionalmente'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@GuilleAlvareez',
      href: 'https://github.com/guillealvarez',
      description: 'Revisa mi código'
    },
    {
      icon: MessageCircle, // Icono genérico para WhatsApp
      label: 'WhatsApp',
      value: '+34 651 150 308',
      href: 'https://wa.me/34651150308',
      description: 'Para consultas rápidas'
    }
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }
      
      // Mostrar notificación de éxito
      showNotificationMessage('¡Mensaje enviado correctamente! Te responderé en menos de 24 horas.', 'success');
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      showNotificationMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 mt-24 max-w-screen-2xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Notificación Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out">
          <div className={`flex items-center space-x-3 p-4 rounded-lg shadow-lg border-l-4 ${
            notificationType === 'success' 
              ? 'bg-green-900/90 border-green-400 text-green-100' 
              : 'bg-red-900/90 border-red-400 text-red-100'
          } backdrop-blur-sm`}>
            <div className="flex-shrink-0">
              {notificationType === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <X className="w-5 h-5 text-red-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">
                {notificationMessage}
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="flex-shrink-0 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="text-center space-y-6 mb-7">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades laborales, colaboraciones en proyectos
            interesantes o simplemente charlar sobre tecnología y desarrollo web.
            ¡No dudes en contactarme desde Sevilla o cualquier parte del mundo!
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Métodos de contacto directo */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-cyan-300 mb-6">Contacto directo</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:bg-gray-800/70"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {method.label}
                        </h5>
                        <p className="text-gray-300 text-xs truncate">
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-cyan-300 mb-6">Envíame un mensaje</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                    errors.subject ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="¿De qué quieres hablar?"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Cuéntame sobre tu proyecto, idea o cualquier consulta que tengas..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                <p className="text-gray-400 text-xs mt-1">Mínimo 10 caracteres</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-lg p-8 border mt-12 border-cyan-400/20">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-cyan-300">
              💡 Respuesta rápida garantizada
            </h4>
            <p className="text-gray-300 text-sm">
              Me comprometo a responder todos los mensajes en menos de 24 horas. 
              Si es urgente, no dudes en contactarme por WhatsApp para una respuesta inmediata.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2025 Guillermo Álvarez Moreno. Desarrollado con Next.js y Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}