"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectCard from "./project-card"
import { Project } from "@/types/project"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"

export default function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchFeaturedProjects() {
      try {
        const res = await fetch("/api/projects")
        if (!res.ok) throw new Error("Failed to fetch projects")
        const data = await res.json()
        setFeaturedProjects(data.slice(0, 3))
        toast({
          title: "Sooner",
          description: "Featured projects loaded successfully.",
        })
      } catch (err) {
        setError((err as Error).message)
        toast({
          title: "Sooner",
          description: "Failed to load featured projects.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchFeaturedProjects()
  }, [])

  if (loading)
    return (
      <section className="section-container">
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-5 w-full max-w-2xl" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>
    )

  if (error)
    return (
      <section className="section-container">
        <p className="text-destructive">Error: {error}</p>
      </section>
    )

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
