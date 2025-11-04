"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Trash2, Edit2, Plus } from "lucide-react"
import { SkeletonCard } from "./skeleton"
import { LoadingSpinner } from "./loading-spinner"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
}

export default function AdminProjectsTab() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: "", description: "", tags: "" })

  useEffect(() => {
    fetchProjects()
  }, [])

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

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      setIsSubmitting(true)
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            tags: formData.tags.split(",").map((t) => t.trim()),
            image: "/project-management-team.png",
            github: "#",
            demo: "#",
          }),
        })

        if (response.ok) {
          setFormData({ title: "", description: "", tags: "" })
          setIsAdding(false)
          fetchProjects()
        }
      } catch (error) {
        console.error("Failed to add project:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    try {
      await fetch(`/api/projects?id=${id}`, { method: "DELETE" })
      fetchProjects()
    } catch (error) {
      console.error("Failed to delete project:", error)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsAdding(!isAdding)}
        className="flex items-center gap-2 px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg transition-colors mb-6 disabled:opacity-50"
        disabled={isSubmitting}
      >
        <Plus size={18} />
        Add Project
      </button>

      {isAdding && (
        <div className="card mb-6">
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Project title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                rows={3}
                placeholder="Project description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="React, Next.js, Tailwind"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting && <LoadingSpinner size="sm" />}
                Save Project
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="card flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="p-2 hover:bg-border rounded-lg transition-colors">
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 hover:bg-error/20 text-error rounded-lg transition-colors disabled:opacity-50"
                  disabled={deletingId === project.id}
                >
                  {deletingId === project.id ? <LoadingSpinner size="sm" /> : <Trash2 size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
