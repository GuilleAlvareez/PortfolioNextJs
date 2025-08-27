"use client";
import { useState, useEffect } from 'react';
// Importación de iconos de lucide-react
import { Mail, Linkedin, Github, MessageCircle, User, MessageSquare, Send, CheckCircle, X } from 'lucide-react';
import { useT } from '@/contexts/TranslationContext';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const t = useT();

  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Controla el estado de envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Maneja errores de validación del formulario
  const [errors, setErrors] = useState<FormErrors>({});
  // Controla la visibilidad de notificaciones toast
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  // Controla la animación de entrada de la sección
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Muestra notificaciones toast con auto-ocultado
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
      description: t('contact_email_description')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Guillermo Álvarez Moreno',
      href: 'https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/',
      description: t('contact_linkedin_description')
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@GuilleAlvareez',
      href: 'https://github.com/GuilleAlvareez',
      description: t('contact_github_description')
    },
    // {
    //   icon: MessageCircle, // Icono genérico para WhatsApp
    //   label: 'WhatsApp',
    //   value: '+34 651 150 308',
    //   href: 'https://wa.me/34651150308',
    //   description: 'Para consultas rápidas'
    // }
  ];

  // Valida todos los campos del formulario antes del envío
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact_name_required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact_email_required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact_email_invalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact_subject_required');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact_message_required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact_message_min_length');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Maneja cambios en los campos del formulario y limpia errores
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Maneja el envío del formulario con validación y notificaciones
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Envía los datos del formulario a la API de contacto
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(t('contact_error'));
      }

      // Mostrar notificación de éxito
      showNotificationMessage(t('contact_success'), 'success');

      // Limpiar formulario después del envío exitoso
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      showNotificationMessage(t('contact_error'), 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-12 mt-16 max-w-screen-2xl mx-auto p-4 sm:p-6 md:p-8" aria-labelledby="contact-title">
      {/* Notificación Toast */}
      <div 
          className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out ${showNotification ? 'visible translate-x-0' : 'translate-x-full invisible'}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className={`flex items-center space-x-3 p-4 rounded-lg shadow-lg border-l-4 ${
            notificationType === 'success' 
              ? 'bg-green-900/90 border-green-400 text-green-100' 
              : 'bg-red-900/90 border-red-400 text-red-100'
          } backdrop-blur-sm`}>
            <div className="flex-shrink-0">
              {notificationType === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
              ) : (
                <X className="w-5 h-5 text-red-400" aria-hidden="true" />
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
              aria-label={t('contact_close_notification')}
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      <div className="relative">
        <div className={`text-center space-y-6 mb-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="contact-title" className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent mb-4 leading-normal md:pb-2">
            {t('contact_title')}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('contact_description')}
          </p>
        </div>

        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Métodos de contacto directo */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">{t('contact_direct_title')}</h3>
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
                    aria-label={`Contactar por ${method.label}: ${method.value}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {method.label}
                        </h4>
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
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">{t('contact_form_title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="contact-form-title">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    <User className="inline w-4 h-4 mr-2" aria-hidden="true" />
                    {t('contact_name')} *
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
                    placeholder={t('contact_name_placeholder')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    required
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    <Mail className="inline w-4 h-4 mr-2" aria-hidden="true" />
                    {t('contact_email')} *
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
                    placeholder={t('contact_email_placeholder')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" aria-hidden="true" />
                  {t('contact_subject')} *
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
                  placeholder={t('contact_subject_placeholder')}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  aria-invalid={!!errors.subject}
                  required
                />
                {errors.subject && <p id="subject-error" className="text-red-400 text-sm mt-1" role="alert">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" aria-hidden="true" />
                  {t('contact_message')} *
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
                  placeholder={t('contact_message_placeholder')}
                  aria-describedby={errors.message ? 'message-error' : 'message-help'}
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">{errors.message}</p>}
                <p id="message-help" className="text-gray-400 text-xs mt-1">{t('contact_message_help')}</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform flex items-center justify-center space-x-2"
                aria-describedby={isSubmitting ? 'submitting-status' : undefined}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
                    <span>{t('contact_sending')}</span>
                    <span id="submitting-status" className="sr-only">{t('contact_sending_status')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>{t('contact_send')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className={`bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-lg p-8 border mt-12 border-cyan-400/20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-cyan-300">
              <span aria-hidden="true">💡</span> {t('contact_guarantee_title')}
            </h4>
            <p className="text-gray-300 text-sm">
              {t('contact_guarantee_description')}
            </p>
          </div>
        </div>

        <footer className={`text-center pt-8 border-t border-gray-700 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 text-sm">
            {t('footer_copyright')}
          </p>
        </footer>
      </div>
    </section>
  );
}