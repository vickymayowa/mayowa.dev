import { createSupabaseServerClient } from "../../../lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        const supabase = await createSupabaseServerClient()

        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

        if (error) {
            return NextResponse.json({ error: "Failed to fetch projects. Please try again later." }, { status: 500 })
        }

        return NextResponse.json({ data, message: "Projects retrieved successfully." })
    } catch (error) {
        console.error("GET /api/projects error:", error)
        return NextResponse.json({ error: "Unable to retrieve projects at this time." }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { title, description, image, tags, github_link, live_url } = await request.json()

        if (!title || !description) {
            return NextResponse.json({ error: "Title and description are required to create a project." }, { status: 400 })
        }

        const { data, error } = await supabase
            .from("projects")
            .insert([{ title, description, image, tags, github, demo }])
            .select()

        if (error) {
            return NextResponse.json({ error: "Could not create project. Please check your input and try again." }, { status: 500 })
        }
        console.log(error)

        return NextResponse.json({ data, message: "Project created successfully!" })
    } catch (error) {
        console.error("POST /api/projects error:", error)
        return NextResponse.json({ error: "An unexpected error occurred while creating the project." }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { id, title, description, image, tags, github_link, live_url } = await request.json()

        if (!id || !title || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const { data, error } = await supabase
            .from("projects")
            .update({ title, description, image, tags, github_link, live_url })
            .eq("id", id)
            .select()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data, success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({ error: "Project ID is required to delete a project." }, { status: 400 })
        }

        const { error } = await supabase.from("projects").delete().eq("id", id)

        if (error) {
            return NextResponse.json({ error: "Failed to delete project. It may no longer exist." }, { status: 500 })
        }

        return NextResponse.json({ message: "Project deleted successfully." })
    } catch (error) {
        console.error("DELETE /api/projects error:", error)
        return NextResponse.json({ error: "An internal error occurred while deleting the project." }, { status: 500 })
    }
}