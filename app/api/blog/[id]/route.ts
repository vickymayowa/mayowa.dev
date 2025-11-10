import { createSupabaseServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const supabase = await createSupabaseServerClient()

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify blog exists and check ownership
    const { data: blog, error: fetchError } = await supabase
      .from("blogs")
      .select("user_id")
      .eq("id", id)
      .single()

    if (fetchError || !blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    if (blog.user_id !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { error } = await supabase.from("blogs").delete().eq("id", id)

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const supabase = await createSupabaseServerClient()

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    // Whitelist allowed fields (prevents updating user_id, created_at, etc.)
    const allowedFields = ['title', 'content', 'slug', 'published', 'excerpt', 'cover_image']
    const updateData: Record<string, any> = {}

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field]
      }
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 })
    }

    // Verify blog exists and check ownership
    const { data: blog, error: fetchError } = await supabase
      .from("blogs")
      .select("user_id, slug")
      .eq("id", id)
      .single()

    if (fetchError || !blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    if (blog.user_id !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // If updating slug, check for uniqueness
    if (updateData.slug && updateData.slug !== blog.slug) {
      const { data: existingBlog } = await supabase
        .from("blogs")
        .select("id")
        .eq("slug", updateData.slug)
        .single()

      if (existingBlog) {
        return NextResponse.json({ error: "Slug already exists" }, { status: 409 })
      }
    }

    const { data, error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
