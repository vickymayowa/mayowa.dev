"use client"

import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createBrowserClient(supabaseUrl, supabaseKey)

export async function uploadProjectImage(file: File, projectId: number) {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `project-${projectId}-${Date.now()}.${fileExt}`

    const { data, error } = await supabase.storage.from("project-images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    })

    if (error) throw error

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("project-images").getPublicUrl(fileName)

    return publicUrl
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}

export function getPublicImageUrl(fileName: string) {
  const {
    data: { publicUrl },
  } = supabase.storage.from("project-images").getPublicUrl(fileName)

  return publicUrl
}
