interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="min-h-screen w-full mx-auto mb-10">
      {children}
    </section>
  )
}
