import fs from "fs/promises"
import path from "path"

const DB_PATH = path.join(process.cwd(), "db", "db.db.json")

export interface Contact {
    id: string
    name: string
    email: string
    message: string
    created_at: string
}

export interface AdminCredential {
    id: string
    username: string
    password: string
    created_at: string
    updated_at: string
}

export interface Blog {
    id: string
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    readtime: string
    image: string
    content: string
    created_at: string
    updated_at: string
}

export interface Experience {
    id: string
    role: string
    company: string
    date: string
    description: string
    highlights: string[]
    created_at: string
    location: string
    skills: string[]
}

export interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    demo: string | null
    created_at: string
    github_link: string
    live_url: string
}

export interface Database {
    contacts: Contact[]
    admin_credentials: AdminCredential[]
    blogs: Blog[]
    experience: Experience[]
    projects: Project[]
}

// Read the database
export async function readDB(): Promise<Database> {
    try {
        const data = await fs.readFile(DB_PATH, "utf-8")
        return JSON.parse(data)
    } catch (error) {
        console.error("Error reading database:", error)
        throw new Error("Failed to read database")
    }
}

// Write to the database
export async function writeDB(data: Database): Promise<void> {
    try {
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 4), "utf-8")
    } catch (error) {
        console.error("Error writing to database:", error)
        throw new Error("Failed to write to database")
    }
}

// Generate a new ID
export function generateId(items: any[]): string {
    if (items.length === 0) return "1"
    const maxId = Math.max(...items.map((item) => parseInt(item.id)))
    return (maxId + 1).toString()
}

// Get current timestamp
export function getCurrentTimestamp(): string {
    const now = new Date()
    return now.toISOString().replace("T", " ").substring(0, 26)
}
