import { readDB, type Blog, type Experience, type Project } from "@/lib/db"
import { projectSlug } from "@/lib/slug"

export async function getProjects(): Promise<Project[]> {
  const db = await readDB()
  return [...db.projects].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects()
  return projects.find((project) => projectSlug(project.title) === slug)
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects()
  return projects.find((project) => project.id === id)
}

export async function getBlogs(): Promise<Blog[]> {
  const db = await readDB()
  return [...db.blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  const blogs = await getBlogs()
  return blogs.find((blog) => blog.id === id)
}

export async function getExperience(): Promise<Experience[]> {
  const db = await readDB()
  return db.experience
}
