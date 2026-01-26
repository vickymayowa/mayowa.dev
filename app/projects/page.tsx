"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/components/project-card"
import { Skeleton } from "@/components/ui/skeleton"
import Pagination from "@/components/pagination"
import { Project } from "@/types/project"
import { Sparkles, Filter } from "lucide-react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        const { data } = await response.json()
        setProjects(data || [])
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <div className="section-container min-h-screen">
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} />
          Portfolio
        </div>
        <h1 className="mb-6 leading-tight">My Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Here are some of the websites and web applications I have built. I focus on making things that work well and are easy to use.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6 text-foreground font-semibold text-sm">
          <Filter size={16} className="text-primary" />
          Filter by Technology
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedTag === null
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted"
              }`}
          >
            All Projects
          </button>
          {allTags.sort().map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
              <Skeleton className="h-8 w-3/4 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {paginatedProjects.length === 0 && (
            <div className="text-center py-32 bg-card/30 rounded-3xl border border-dashed border-border/50">
              <p className="text-muted-foreground font-medium">No projects found with the selected filter.</p>
              <button
                onClick={() => setSelectedTag(null)}
                className="mt-4 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
        </>
      )}
    </div>
  )
}
