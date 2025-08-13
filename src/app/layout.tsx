import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Portfolio - Guillermo Álvarez Moreno',
  description: 'Desarrollador Fullstack especializado en React y tecnologías web modernas. Portfolio personal desarrollado con Next.js y Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
