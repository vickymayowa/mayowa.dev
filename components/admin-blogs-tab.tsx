"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Trash2 } from "lucide-react"
import { SkeletonCard } from "./skeleton"
import { LoadingSpinner } from "./loading-spinner"

interface Blog {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
}

export default function AdminBlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    date: new Date().toISOString().split("T")[0],
    author: "Favour Mayowa",
    category: "Full-Stack",
    readTime: "5 min read",
    image: "",
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs")
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          title: "",
          excerpt: "",
          date: new Date().toISOString().split("T")[0],
          author: "Favour Mayowa",
          category: "Full-Stack",
          readTime: "5 min read",
          image: "",
        })
        setShowForm(false)
        fetchBlogs()
      }
    } catch (error) {
      console.error("Error adding blog:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteBlog = async (id: number) => {
    setDeletingId(id)
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await fetch(`/api/blogs/${id}`, { method: "DELETE" })
        if (response.ok) {
          fetchBlogs()
        }
      } catch (error) {
        console.error("Error deleting blog:", error)
      } finally {
        setDeletingId(null)
      }
    } else {
      setDeletingId(null)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Blogs</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={isSubmitting}
        >
          <Plus size={18} />
          Add Blog
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddBlog} className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          <textarea
            placeholder="Excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 mb-4"
            rows={3}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              required
            />
            <input
              type="text"
              placeholder="Read Time (e.g., 5 min read)"
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting && <LoadingSpinner size="sm" />}
              Add Blog
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-card border border-border rounded-lg p-4 flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{blog.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{blog.excerpt.substring(0, 100)}...</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => handleDeleteBlog(blog.id)}
                className="ml-4 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-50"
                disabled={deletingId === blog.id}
              >
                {deletingId === blog.id ? <LoadingSpinner size="sm" /> : <Trash2 size={18} />}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
