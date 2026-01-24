"use client"

import Image from "next/image"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
    <div className="group relative flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-none mt-1">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.github_link && (
              <Link
                href={project.github_link}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            )}
            {project.live_url && (
              <Link
                href={project.live_url}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50 transition-colors group-hover:border-primary/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-transparent text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Invisible Link Overlay for Demo */}
      {project.live_url && (
        <Link
          href={project.live_url}
          target="_blank"
          className="absolute inset-0 z-0"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
