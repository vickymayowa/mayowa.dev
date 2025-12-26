import { type NextRequest, NextResponse } from "next/server"
import { readDB, writeDB, generateId, getCurrentTimestamp } from "../../../lib/db"

export async function GET() {
    try {
        const db = await readDB()

        // Sort by created_at descending
        const sortedProjects = [...db.projects].sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })

        return NextResponse.json({ data: sortedProjects, message: "Projects retrieved successfully." })
    } catch (error) {
        console.error("GET /api/projects error:", error)
        return NextResponse.json({ error: "Unable to retrieve projects at this time." }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const { title, description, image, tags, github_link, live_url } = await request.json()

        if (!title || !description) {
            return NextResponse.json(
                { error: "Title and description are required to create a project." },
                { status: 400 }
            )
        }

        const db = await readDB()

        const newProject = {
            id: generateId(db.projects),
            title,
            description,
            image,
            tags,
            github_link,
            live_url,
            demo: null,
            created_at: getCurrentTimestamp(),
        }

        db.projects.push(newProject)
        await writeDB(db)

        return NextResponse.json({ data: [newProject], message: "Project created successfully!" })
    } catch (error) {
        console.error("POST /api/projects error:", error)
        return NextResponse.json(
            { error: "An unexpected error occurred while creating the project." },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, title, description, image, tags, github_link, live_url } = await request.json()

        if (!id || !title || !description || !image || !tags || !github_link || !live_url) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const db = await readDB()

        const projectIndex = db.projects.findIndex((proj) => proj.id === id)

        if (projectIndex === -1) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 })
        }

        db.projects[projectIndex] = {
            ...db.projects[projectIndex],
            title,
            description,
            image,
            tags,
            github_link,
            live_url,
        }

        await writeDB(db)

        return NextResponse.json({ data: [db.projects[projectIndex]], success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({ error: "Project ID is required to delete a project." }, { status: 400 })
        }

        const db = await readDB()

        const projectIndex = db.projects.findIndex((proj) => proj.id === id)

        if (projectIndex === -1) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 })
        }

        db.projects.splice(projectIndex, 1)
        await writeDB(db)

        return NextResponse.json({ message: "Project deleted successfully." })
    } catch (error) {
        console.error("DELETE /api/projects error:", error)
        return NextResponse.json(
            { error: "An internal error occurred while deleting the project." },
            { status: 500 }
        )
    }
}