import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Allow only safe image types
const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const maxSize = 5 * 1024 * 1024; // 5MB

/**
 * Handle image upload
 * POST /api/image
 * FormData: { file: File, projectId: string }
 */
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const projectId = formData.get("projectId") as string;

        if (!file) return NextResponse.json({ error: "Missing file" }, { status: 400 });
        if (!allowedTypes.includes(file.type))
            return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
        if (file.size > maxSize)
            return NextResponse.json({ error: "File must be <5MB" }, { status: 400 });

        // Generate file name
        const ext = file.name.split(".").pop();
        const fileName = `project-${projectId}-${Date.now()}.${ext}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
            .from("project-images")
            .upload(fileName, file, { upsert: true });

        if (uploadError) throw uploadError;

        // Get public URL
        const {
            data: { publicUrl },
        } = supabase.storage.from("project-images").getPublicUrl(fileName);

        return NextResponse.json({ publicUrl, fileName });
    } catch (error: any) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
    }
}

/**
 * Handle image deletion
 * DELETE /api/image
 * JSON Body: { fileName: string }
 */
export async function DELETE(req: NextRequest) {
    try {
        const { fileName } = await req.json();
        if (!fileName) return NextResponse.json({ error: "Missing fileName" }, { status: 400 });

        const { error } = await supabase.storage.from("project-images").remove([fileName]);
        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete error:", error);
        return NextResponse.json({ error: error.message || "Delete failed" }, { status: 500 });
    }
}
