import { type NextRequest, NextResponse } from "next/server"
import { readDB, writeDB, generateId, getCurrentTimestamp } from "../../../lib/db"

export async function GET() {
  try {
    const db = await readDB()

    // Sort by date descending
    const sortedBlogs = [...db.blogs].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return NextResponse.json(sortedBlogs)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await readDB()

    const newBlog = {
      id: generateId(db.blogs),
      ...body,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    }

    db.blogs.push(newBlog)
    await writeDB(db)

    return NextResponse.json(newBlog, { status: 201 })
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
