import { createSupabaseServerClient } from "../../../lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        const supabase = await createSupabaseServerClient()

        const { data, error } = await supabase.from("experience").select("*").order("created_at", { ascending: false })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { role, company, date, description, location, skills, highlights } = await request.json()

        if (!role || !company) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const skillsArray = skills ? skills.split(",").map((s: string) => s.trim()) : []

        const { data, error } = await supabase
            .from("experience")
            .insert([{ role, company, date, description, location, skills: skillsArray, highlights }])
            .select()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data, success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { id, role, company, date, description, location, skills, highlights } = await request.json()

        if (!id || !role || !company) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const skillsArray = skills ? skills.split(",").map((s: string) => s.trim()) : []

        const { data, error } = await supabase
            .from("experience")
            .update({ role, company, date, description, location, skills: skillsArray, highlights })
            .eq("id", id)
            .select()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data, success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
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

        const { error } = await supabase.from("experience").delete().eq("id", id)

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}
