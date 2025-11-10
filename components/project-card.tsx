"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
// import { Project } from "@/types/project"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    github_link: string
    live_url: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-border">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h3 className="mb-2 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
      <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded transition-all duration-200 group-hover:bg-primary/30"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={project.github_link || "#"}
          target={project.github_link && project.github_link !== "#" ? "_blank" : undefined}
          rel={project.github_link && project.github_link !== "#" ? "noopener noreferrer" : undefined}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-border hover:bg-primary/20 text-foreground hover:text-primary rounded transition-all duration-200 text-sm hover:shadow-lg hover:shadow-primary/20"
        >
          <Github size={16} />
          Code
        </a>
        <a
          href={project.live_url || "#"}
          target={project.live_url && project.live_url !== "#" ? "_blank" : undefined}
          rel={project.live_url && project.live_url !== "#" ? "noopener noreferrer" : undefined}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary hover:opacity-90 text-white rounded transition-all duration-200 text-sm hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
        >
          <ExternalLink size={16} />
          Demo
        </a>
      </div>
    </div>
  )
}
