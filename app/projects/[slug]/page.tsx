import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import JsonLdScript from "@/components/json-ld"
import { getProjectBySlug, getProjects } from "@/lib/data"
import { createPageMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, creativeWorkSchema } from "@/lib/seo/json-ld"
import { projectSlug } from "@/lib/slug"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({ slug: projectSlug(project.title) }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    keywords: [...project.tags, "portfolio project", "case study"],
    ogImage: project.image.startsWith("http") ? project.image : undefined,
  })
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const imageSrc = project.image || "/placeholder.svg"

  return (
    <article className="section-container min-h-screen max-w-5xl">
      <JsonLdScript
        data={[
          creativeWorkSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${slug}` },
          ]),
        ]}
      />

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Projects
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.live_url && (
            <Link
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              Live Demo
            </Link>
          )}
          {project.github_link && (
            <Link
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} aria-hidden="true" />
              View Source
            </Link>
          )}
        </div>
      </header>

      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted border border-border/50">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${project.title}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
    </article>
  )
}
