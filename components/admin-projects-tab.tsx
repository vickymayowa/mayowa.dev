"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Trash2, Plus, Upload, Edit } from 'lucide-react'
import { SkeletonCard } from "./skeleton"
import { LoadingSpinner } from "./loading-spinner"
// import { uploadProjectImage } from "../lib/supabase/supabase-storage"
import { Project } from "@/types/project"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "sonner"

interface ProjectForm {
  title: string;
  description: string;
  tags: string[];
  github_link: string;
  live_url: string;
  image: string;
}

export default function AdminProjectsTab() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [tagsInput, setTagsInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [formData, setFormData] = useState<ProjectForm>({
    title: "",
    description: "",
    tags: [],
    github_link: "",
    live_url: "",
    image: "",
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  // Keep tagsInput synced with formData.tags
  useEffect(() => {
    setTagsInput(formData.tags.join(", "));
  }, [formData.tags]);


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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file)
    if (!file) return;

    setUploadingImage(true);
    try {
      // Use a temporary ID for preview or project reference
      const tempId = Date.now();

      // Upload via server-side endpoint
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);
      formDataUpload.append("projectId", tempId.toString());

      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await res.json();
      console.log(data)

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setFormData({ ...formData, image: data.publicUrl })

      console.log(data.publicUrl)
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploadingImage(false);
    }
  };


  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      setIsSubmitting(true)
      try {
        const method = editingId ? "PUT" : "POST"
        const body = editingId
          ? {
            id: editingId,
            title: formData.title,
            description: formData.description,
            tags: formData.tags,
            // tags: formData.tags.split(",").map((t) => t.trim()),
            // tags: typeof formData.tags === "string" ? formData.tags.split(",").map((t) => t.trim()) : formData.tags,
            image: formData.image,
            github_link: formData.github_link || "#",
            live_url: formData.live_url || "#",
          }
          : {
            title: formData.title,
            description: formData.description,
            // tags: formData.tags.split(",").map((t) => t.trim()),
            tags: formData.tags,
            // tags: typeof formData.tags === "string" ? formData.tags.split(",").map((t) => t.trim()) : formData.tags,
            image: formData.image,
            github_link: formData.github_link || "#",
            live_url: formData.live_url || "#",
          }

        const response = await fetch("/api/projects", {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        console.log(response)
        console.log(body)

        if (response.ok) {
          setFormData({
            title: "",
            description: "",
            tags: [],
            github_link: "",
            live_url: "",
            image: "",
          })
          setIsAdding(false)
          setEditingId(null)
          fetchProjects()
        }
      } catch (error) {
        console.log(error)
        console.error("Failed to save project:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      tags: project.tags,
      image: project.image,
      github_link: project.github_link,
      live_url: project.live_url,
    })
    setEditingId(project.id)
    setIsAdding(true)
  }

  async function handleDeleteImage(fileName: string) {
    if (!confirm("Delete this image?")) return;

    try {
      const res = await fetch("/api/upload-image", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setFormData({ ...formData, image: "" });
      alert("Image deleted successfully");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Error deleting image");
    }
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({
      title: "",
      description: "",
      tags: [],
      github_link: "",
      live_url: "",
      image: "",
    })
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this project?")) return;

    setDeletingId(id);
    try {
      const response = await fetch(`/api/projects`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      toast.success("Project Deleted Successfuly")
      if (response.ok) {
        fetchProjects();

      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
      alert("Error deleting project");
    } finally {
      setDeletingId(null);
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
            <h3 className="font-semibold">{editingId ? "Edit Project" : "Add New Project"}</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Project Image</label>
              <div className="flex items-center gap-3">
                {formData.image && formData.image !== "/placeholder.svg" && (
                  <div className="relative group w-20 h-20">
                    <img
                      src={formData.image || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(formData.image.split("/").pop()!)} // extract file name
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
                      title="Delete image"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}

                <label className="flex items-center gap-2 px-4 py-2 bg-border hover:bg-border/80 cursor-pointer rounded-lg transition-colors">
                  <Upload size={18} />
                  <span className="text-sm">{uploadingImage ? "Uploading..." : "Upload Image"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="hidden"
                  />
                </label>
              </div>

            </div>
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
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)} // no split yet
                onBlur={() =>
                  setFormData((prev) => ({
                    ...prev,
                    tags: tagsInput
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean),
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="React, Next.js, Tailwind"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">GitHub Link</label>
              <input
                type="url"
                value={formData.github_link}
                onChange={(e) => setFormData({ ...formData, github_link: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="https://github.com/username/repo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Live URL</label>
              <input
                type="url"
                value={formData.live_url}
                onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="https://project-demo.vercel.app"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
                disabled={isSubmitting || uploadingImage}
              >
                {isSubmitting && <LoadingSpinner size="sm" />}
                {editingId ? "Update Project" : "Save Project"}
              </button>
              <button type="button" onClick={handleCancel} className="btn-secondary" disabled={isSubmitting}>
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
            <div key={project.id} className="card">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {project.image && project.image !== "/placeholder.svg" && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-24 h-24 object-cover rounded sm:flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage({ url: project.image, title: project.title })}
                      />
                    </DialogTrigger>
                    {selectedImage?.url === project.image && (
                      <DialogContent className="max-w-2xl p-0 border-0">
                        <DialogTitle className="sr-only">{project.title}</DialogTitle>
                        <img
                          src={selectedImage.url || "/placeholder.svg"}
                          alt={selectedImage.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    )}
                  </Dialog>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.github_link || project.live_url) && (
                    <div className="flex gap-2 text-xs">
                      {project.github_link && project.github_link !== "#" && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live_url && project.live_url !== "#" && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Live URL
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 ml-auto">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                  >
                    <Edit size={18} />
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
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
