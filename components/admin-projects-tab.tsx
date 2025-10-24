"use client"

import type React from "react"

import { useState } from "react"
import { Trash2, Edit2, Plus } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tags: ["Next.js", "React", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tags: ["React", "Firebase", "Tailwind"],
  },
]

export default function AdminProjectsTab() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: "", description: "", tags: "" })

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      const newProject: Project = {
        id: Math.max(...projects.map((p) => p.id), 0) + 1,
        title: formData.title,
        description: formData.description,
        tags: formData.tags.split(",").map((t) => t.trim()),
      }
      setProjects([...projects, newProject])
      setFormData({ title: "", description: "", tags: "" })
      setIsAdding(false)
    }
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <div>
      <button
        onClick={() => setIsAdding(!isAdding)}
        className="flex items-center gap-2 px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg transition-colors mb-6"
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
              <button type="submit" className="btn-primary">
                Save Project
              </button>
              <button type="button" onClick={() => setIsAdding(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

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
                className="p-2 hover:bg-error/20 text-error rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
