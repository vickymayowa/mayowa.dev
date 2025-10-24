"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"

const allProjects = [
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
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "/analytics-dashboard.png",
    tags: ["React", "Recharts", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Full-featured social platform with user profiles, posts, and real-time notifications.",
    image: "/social-media-app-interface.png",
    tags: ["Next.js", "Supabase", "WebSocket", "React"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    image: "/weather-app-interface.png",
    tags: ["React", "API", "Tailwind", "Geolocation"],
    github: "#",
    demo: "#",
  },
]

const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)))

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? allProjects.filter((project) => project.tags.includes(selectedTag))
    : allProjects

  return (
    <div className="section-container">
      <div className="mb-12">
        <h1 className="mb-4">My Projects</h1>
        <p className="text-foreground/70 max-w-2xl">
          A collection of projects I've built showcasing my expertise in full-stack development, UI/UX design, and
          modern web technologies.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="mb-12">
        <p className="text-sm font-medium text-foreground/70 mb-4">Filter by technology:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedTag === null
                ? "bg-primary text-white"
                : "bg-card border border-border hover:border-primary text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "bg-card border border-border hover:border-primary text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70">No projects found with the selected filter.</p>
        </div>
      )}
    </div>
  )
}
