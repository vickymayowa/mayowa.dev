"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/components/project-card"
import { Skeleton } from "@/components/skeleton"
import Pagination from "@/components/pagination"
import { Project } from "@/types/project"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const paginatedProjects = projects.slice(startIndex, startIndex + projectsPerPage)

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
    setCurrentPage(1) // Reset to page 1 when filter changes
  }, [selectedTag])

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

  const filteredProjects = selectedTag ? projects.filter((project) => project.tags.includes(selectedTag)) : projects

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
            className={`px-4 py-2 rounded-lg transition-all ${selectedTag === null
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
              className={`px-4 py-2 rounded-lg transition-all ${selectedTag === tag
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
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-80 w-full" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {paginatedProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70">No projects found with the selected filter.</p>
            </div>
          )}

          {/* Pagination Component */}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </>
      )}
    </div>
  )
}
