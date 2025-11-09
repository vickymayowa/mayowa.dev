"use client"
import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables")
}

export const supabase = createBrowserClient(
  supabaseUrl || "",
  supabaseKey || ""
)

// File validation helper
function validateFile(file: File): { valid: boolean; error?: string } {
  const maxSize = 5 * 1024 * 1024 // 5MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]

  if (file.size > maxSize) {
    return { valid: false, error: "File size must be less than 5MB" }
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "File must be an image (JPEG, PNG, WebP, or GIF)" }
  }

  return { valid: true }
}

export async function uploadProjectImage(file: File, projectId: number) {
  try {
    // Validate environment variables
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase configuration is missing. Check your .env.local file.")
    }

    // Validate file
    const validation = validateFile(file)
    if (!validation.valid) {
      throw new Error(validation.error)
    }

    // Create unique filename
    const fileExt = file.name.split(".").pop()
    const fileName = `project-${projectId}-${Date.now()}.${fileExt}`

    // Upload file
    const { data, error } = await supabase.storage
      .from("project-images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: true,
      })

    if (error) {
      console.error("Supabase upload error:", error)
      throw new Error(`Upload failed: ${error.message}`)
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("project-images").getPublicUrl(fileName)

    return { publicUrl, fileName }
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}

export async function deleteProjectImage(fileName: string) {
  try {
    const { error } = await supabase.storage
      .from("project-images")
      .remove([fileName])

    if (error) throw error
    return true
  } catch (error) {
    console.error("Error deleting image:", error)
    throw error
  }
}

export function getPublicImageUrl(fileName: string) {
  const {
    data: { publicUrl },
  } = supabase.storage.from("project-images").getPublicUrl(fileName)
  return publicUrl
}