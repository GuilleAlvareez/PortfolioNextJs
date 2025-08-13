interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="min-h-screen w-full max-w-4xl mx-auto py-16 px-4">
      {title && (
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
