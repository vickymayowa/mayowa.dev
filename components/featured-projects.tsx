import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import ProjectCard from "./project-card"
import { getProjects } from "@/lib/data"

export default async function FeaturedProjects() {
  const projects = await getProjects()
  const featuredProjects = projects.slice(0, 5)

  return (
    <section className="section-container" aria-labelledby="featured-projects-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} aria-hidden="true" />
            My Work
          </div>
          <h2 id="featured-projects-heading" className="mb-6 leading-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Full-stack web applications, SaaS dashboards, and hosting-ready systems — built with React, Next.js, Vue, Node.js, and TypeScript.
          </p>
        </div>
        <Link href="/projects" className="btn-outline-premium group shrink-0">
          View All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
