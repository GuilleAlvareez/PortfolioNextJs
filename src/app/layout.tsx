import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Chatbot from '@/components/ui/Chatbot';

// Configuración de la fuente Inter con variable CSS para optimización
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Guillermo Álvarez Moreno - Desarrollador Fullstack Sevilla',
    template: '%s | Guillermo Álvarez Moreno - Desarrollador Fullstack'
  },
  description: 'Desarrollador Fullstack especializado en React, Next.js e Inteligencia Artificial. Portfolio personal con base en Sevilla, España. Experiencia en desarrollo web moderno y tecnologías emergentes.',
  keywords: [
    'Desarrollador Fullstack Sevilla',
    'React Developer',
    'Next.js Expert',
    'Portfolio de desarrollador',
    'Inteligencia Artificial',
    'Desarrollo web moderno',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Development Sevilla',
    'Fullstack Engineer',
    'Guillermo portfolio',
    'Guillermo Álvarez Moreno portfolio',
    'Guillermo frontend',
    'Guillermo backend',
    'Guillermo javascript',
    'Guillermo typescript',
    'Guillermo web development',
    'Guillermo fullstack',
    'Guillermo AI',
    'Guillermo inteligencia artificial',
    'Guillermo Sevilla',
    'Guillermo Spain',
    'Guillermo España',
  ],
  authors: [{ name: 'Guillermo Álvarez Moreno' }],
  creator: 'Guillermo Álvarez Moreno',
  publisher: 'Guillermo Álvarez Moreno',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google-site-verification-code', // Añadir cuando tengas el código de verificación
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://guillermoalvarezdev.com', // Cambiar por tu dominio real
    siteName: 'Guillermo Álvarez Moreno - Portfolio',
    title: 'Guillermo Álvarez Moreno - Desarrollador Fullstack Sevilla',
    description: 'Desarrollador Fullstack especializado en React, Next.js e Inteligencia Artificial. Portfolio personal con base en Sevilla, España.',
    images: [
      {
        url: '/og-image.png', // Crear esta imagen
        width: 1200,
        height: 630,
        alt: 'Guillermo Álvarez Moreno - Desarrollador Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@guillermoalvarez', // Cambiar por tu handle de Twitter
    creator: '@guillermoalvarez',
    title: 'Guillermo Álvarez Moreno - Desarrollador Fullstack Sevilla',
    description: 'Desarrollador Fullstack especializado en React, Next.js e Inteligencia Artificial. Portfolio personal con base en Sevilla, España.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://guillermoalvarezdev.com', // Cambiar por tu dominio real
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Datos estructurados JSON-LD para SEO y rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Guillermo Álvarez Moreno",
              "jobTitle": "Desarrollador Fullstack",
              "description": "Desarrollador Fullstack especializado en React, Next.js e Inteligencia Artificial con base en Sevilla, España",
              "url": "https://guillermoalvarezdev.com",
              "image": "https://guillermoalvarezdev.com/og-image.png",
              "sameAs": [
                "https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/",
                "https://github.com/GuilleAlvareez"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sevilla",
                "addressCountry": "ES"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Inteligencia Artificial",
                "Desarrollo Web",
                "Frontend Development",
                "Backend Development"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "IES Hermanos Machado"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "SURLABS"
              }
            })
          }}
        />
      </head>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
        {/* Analytics de Vercel para tracking de métricas */}
        <Analytics />
        {/* Chatbot flotante disponible en toda la aplicación */}
        <Chatbot />
      </body>
    </html>
  )
}
