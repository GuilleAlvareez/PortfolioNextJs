interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
      <h3 className="text-xl font-bold mb-2 text-gray-100">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-700 text-cyan-400 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
      >
        Ver proyecto →
      </a>
    </div>
  )
}
