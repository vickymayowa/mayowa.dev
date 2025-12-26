import { type NextRequest, NextResponse } from "next/server"
import { readDB, writeDB, getCurrentTimestamp } from "@/lib/db"

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const db = await readDB()

    // Find blog index
    const blogIndex = db.blogs.findIndex((blog) => blog.id === id)

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Remove blog
    db.blogs.splice(blogIndex, 1)

    // Write to database
    await writeDB(db)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const body = await request.json()
    const db = await readDB()

    // Find blog index
    const blogIndex = db.blogs.findIndex((blog) => blog.id === id)

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    // Update blog
    db.blogs[blogIndex] = {
      ...db.blogs[blogIndex],
      ...body,
      id, // Ensure ID doesn't change
      updated_at: getCurrentTimestamp(),
    }

    // Write to database
    await writeDB(db)

    return NextResponse.json(db.blogs[blogIndex])
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
