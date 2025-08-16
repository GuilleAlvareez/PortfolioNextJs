// Props para el componente wrapper de secciones
interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

// Componente wrapper reutilizable para secciones del portfolio
export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="min-h-screen w-full mx-auto mb-10">
      {children}
    </section>
  )
}
