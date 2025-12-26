import { type NextRequest, NextResponse } from "next/server"
import { readDB, writeDB, generateId, getCurrentTimestamp } from "../../../lib/db"

export async function GET() {
    try {
        const db = await readDB()

        // Sort by created_at descending
        const sortedExperience = [...db.experience].sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })

        return NextResponse.json({ data: sortedExperience })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const { role, company, date, description, location, skills, highlights } = await request.json()

        if (!role || !company) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const db = await readDB()

        const skillsArray = skills ? skills.split(",").map((s: string) => s.trim()) : []

        const newExperience = {
            id: generateId(db.experience),
            role,
            company,
            date,
            description,
            location,
            skills: skillsArray,
            highlights: highlights || [],
            created_at: getCurrentTimestamp(),
        }

        db.experience.push(newExperience)
        await writeDB(db)

        return NextResponse.json({ data: [newExperience], success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, role, company, date, description, location, skills, highlights } = await request.json()

        if (!id || !role || !company) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const db = await readDB()

        const experienceIndex = db.experience.findIndex((exp) => exp.id === id)

        if (experienceIndex === -1) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 })
        }

        const skillsArray = skills ? skills.split(",").map((s: string) => s.trim()) : []

        db.experience[experienceIndex] = {
            ...db.experience[experienceIndex],
            role,
            company,
            date,
            description,
            location,
            skills: skillsArray,
            highlights: highlights || [],
        }

        await writeDB(db)

        return NextResponse.json({ data: [db.experience[experienceIndex]], success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 })
        }

        const db = await readDB()

        const experienceIndex = db.experience.findIndex((exp) => exp.id === id)

        if (experienceIndex === -1) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 })
        }

        db.experience.splice(experienceIndex, 1)
        await writeDB(db)

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}
