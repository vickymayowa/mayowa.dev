import { NextRequest, NextResponse } from "next/server"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"]
const maxSize = 5 * 1024 * 1024 // 5MB

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabase()
    if (!supabase) {
      return NextResponse.json({ error: "Image upload is not configured" }, { status: 503 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File
    const projectId = formData.get("projectId") as string

    if (!file) return NextResponse.json({ error: "Missing file" }, { status: 400 })
    if (!allowedTypes.includes(file.type))
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
    if (file.size > maxSize)
      return NextResponse.json({ error: "File must be <5MB" }, { status: 400 })

    const ext = file.name.split(".").pop()
    const fileName = `project-${projectId}-${Date.now()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(fileName, file, { upsert: true })

    if (uploadError) throw uploadError

    const {
      data: { publicUrl },
    } = supabase.storage.from("project-images").getPublicUrl(fileName)

    return NextResponse.json({ publicUrl, fileName })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Upload failed"
    console.error("Upload error:", error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const supabase = getSupabase()
    if (!supabase) {
      return NextResponse.json({ error: "Image upload is not configured" }, { status: 503 })
    }

    const { fileName } = await req.json()
    if (!fileName) return NextResponse.json({ error: "Missing fileName" }, { status: 400 })

    const { error } = await supabase.storage.from("project-images").remove([fileName])
    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Delete failed"
    console.error("Delete error:", error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
