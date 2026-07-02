import { Filter, Sparkles } from "lucide-react"
import ProjectsGrid from "@/components/projects-grid"
import JsonLdScript from "@/components/json-ld"
import { getProjects } from "@/lib/data"
import { breadcrumbSchema, projectSchema } from "@/lib/seo/json-ld"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="section-container min-h-screen">
      <JsonLdScript
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          ...projects.map((project) => projectSchema(project)),
        ]}
      />

      <header className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} aria-hidden="true" />
          Portfolio
        </div>
        <h1 className="mb-6 leading-tight">Full-Stack Web Development Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Featured projects spanning SaaS dashboards, webhook systems, inventory management, VPS deployment automation, and UI/UX design systems — built with React, Vue, Node.js, TypeScript, and production hosting infrastructure.
        </p>
      </header>

      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6 text-foreground font-semibold text-sm">
          <Filter size={16} className="text-primary" aria-hidden="true" />
          Filter by Technology
        </div>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  )
}
