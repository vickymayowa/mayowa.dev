"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Trash2, Edit2, Plus } from "lucide-react"
import { SkeletonCard } from "./skeleton"
import { LoadingSpinner } from "./loading-spinner"

interface Experience {
  id: number
  role: string
  company: string
  date: string
  description: string
}

export default function AdminExperienceTab() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ role: "", company: "", date: "", description: "" })

  useEffect(() => {
    fetchExperience()
  }, [])

  const fetchExperience = async () => {
    try {
      const response = await fetch("/api/experience")
      const { data } = await response.json()
      setExperiences(data || [])
    } catch (error) {
      console.error("Failed to fetch experience:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.role && formData.company) {
      setIsSubmitting(true)
      try {
        const response = await fetch("/api/experience", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            highlights: [],
          }),
        })

        if (response.ok) {
          setFormData({ role: "", company: "", date: "", description: "" })
          setIsAdding(false)
          fetchExperience()
        }
      } catch (error) {
        console.error("Failed to add experience:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    try {
      await fetch(`/api/experience?id=${id}`, { method: "DELETE" })
      fetchExperience()
    } catch (error) {
      console.error("Failed to delete experience:", error)
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
        Add Experience
      </button>

      {isAdding && (
        <div className="card mb-6">
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date Range</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="2022 - Present"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                rows={3}
                placeholder="Job description"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting && <LoadingSpinner size="sm" />}
                Save Experience
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
          {experiences.map((exp) => (
            <div key={exp.id} className="card flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-primary text-sm">{exp.company}</p>
                <p className="text-foreground/60 text-sm mb-2">{exp.date}</p>
                <p className="text-foreground/70 text-sm">{exp.description}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="p-2 hover:bg-border rounded-lg transition-colors">
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="p-2 hover:bg-error/20 text-error rounded-lg transition-colors disabled:opacity-50"
                  disabled={deletingId === exp.id}
                >
                  {deletingId === exp.id ? <LoadingSpinner size="sm" /> : <Trash2 size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
