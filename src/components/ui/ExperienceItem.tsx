interface ExperienceItemProps {
  date: string
  title: string
  company: string
  description: string
}

export default function ExperienceItem({ date, title, company, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 border-l border-gray-700 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 bg-cyan-400 rounded-full"></div>
      
      {/* Content */}
      <div className="space-y-2">
        <time className="text-sm text-gray-500 font-medium">
          {date}
        </time>
        
        <h3 className="text-lg font-semibold text-gray-100">
          {title}
        </h3>
        
        <p className="text-cyan-400 font-medium">
          {company}
        </p>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
