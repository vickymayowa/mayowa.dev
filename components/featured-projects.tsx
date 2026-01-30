"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
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
        const response = await res.json()
        setFeaturedProjects(response.data.slice(0, 3))
      } catch (err) {
        setError((err as Error).message)
        toast({
          title: "Error",
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
        <div className="mb-16">
          <Skeleton className="h-4 w-24 mb-4" />
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )

  if (error)
    return (
      <section className="section-container">
        <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <p className="text-destructive font-medium">Error: {error}</p>
        </div>
      </section>
    )

  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} />
            My Work
          </div>
          <h2 className="mb-6 leading-tight">Selected Projects</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I build and maintain websites and web applications. Here are some of my favorite projects.
          </p>
        </div>
        <Link href="/projects" className="btn-outline-premium group shrink-0">
          View All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
