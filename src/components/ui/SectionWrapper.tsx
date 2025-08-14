interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="min-h-screen w-full mx-auto">
      {title && (
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
