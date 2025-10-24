"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectCard from "./project-card"

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/ecommerce-dashboard.png",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/task-management-app.png",
    tags: ["React", "Firebase", "Tailwind", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Modern chat application powered by AI with conversation history and themes.",
    image: "/ai-chat-interface.png",
    tags: ["Next.js", "OpenAI", "Vercel", "Prisma"],
    github: "#",
    demo: "#",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-container">
      <div className="mb-12">
        <h2 className="mb-4">Featured Projects</h2>
        <p className="text-foreground/70 max-w-2xl">
          A selection of my recent work showcasing my skills in full-stack development, UI/UX design, and modern web
          technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/projects" className="btn-primary inline-flex items-center gap-2 group">
          View All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
