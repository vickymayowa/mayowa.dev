import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc",
            },
        })

        return NextResponse.json({ data: projects, message: "Projects retrieved successfully." })
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

        const newProject = await prisma.project.create({
            data: {
                title,
                description,
                image,
                tags,
                githubLink: github_link,
                liveUrl: live_url,
            },
        })

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

        if (!id) {
            return NextResponse.json({ error: "Project ID is required" }, { status: 400 })
        }

        const updatedProject = await prisma.project.update({
            where: { id },
            data: {
                title,
                description,
                image,
                tags,
                githubLink: github_link,
                liveUrl: live_url,
            },
        })

        return NextResponse.json({ data: [updatedProject], success: true })
    } catch (error) {
        console.error("PUT /api/projects error:", error)
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

        await prisma.project.delete({
            where: { id },
        })

        return NextResponse.json({ message: "Project deleted successfully." })
    } catch (error) {
        console.error("DELETE /api/projects error:", error)
        return NextResponse.json(
            { error: "An internal error occurred while deleting the project." },
            { status: 500 }
        )
    }
}
