import { createSupabaseServerClient } from "../../../lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        const supabase = await createSupabaseServerClient()

        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { title, description, image, tags, github, demo } = await request.json()
        // console.log(request)

        if (!title || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const { data, error } = await supabase
            .from("projects")
            .insert([{ title, description, image, tags, github, demo }])
            .select()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data, success: true })
    } catch (error) {
        console.log(error)
        // return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 })
        }

        const { error } = await supabase.from("projects").delete().eq("id", id)

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}