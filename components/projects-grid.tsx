"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/components/project-card"
import Pagination from "@/components/pagination"
import type { Project } from "@/lib/db"

type ProjectsGridProps = {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])

  return (
    <>
      <div className="mb-16">
        <h2 className="sr-only">Filter projects by technology</h2>
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Project technology filters">
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            aria-pressed={selectedTag === null}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              selectedTag === null
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted"
            }`}
          >
            All Projects
          </button>
          {allTags.sort().map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              aria-pressed={selectedTag === tag}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {paginatedProjects.length === 0 ? (
        <div className="text-center py-32 bg-card/30 rounded-3xl border border-dashed border-border/50">
          <p className="text-muted-foreground font-medium">No projects found with the selected filter.</p>
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className="mt-4 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-20 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                ariaLabel="Projects pagination"
              />
            </div>
          )}
        </>
      )}
    </>
  )
}
