import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client (SERVICE ROLE KEY)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
const maxSize = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const projectId = formData.get("projectId") as string;

        if (!file || !projectId) {
            return NextResponse.json({ error: "Missing file or projectId" }, { status: 400 });
        }

        // Validate file
        if (file.size > maxSize) {
            return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 });
        }

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
        }

        // Create unique filename
        const fileExt = file.name.split(".").pop();
        const fileName = `project-${projectId}-${Date.now()}.${fileExt}`;

        // Upload using service role (bypasses RLS)
        const { data, error } = await supabase.storage
            .from("project-images")
            .upload(fileName, file, { upsert: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Get public URL
        const { data: urlData } = supabase.storage.from("project-images").getPublicUrl(fileName);

        return NextResponse.json({ publicUrl: urlData.publicUrl, fileName });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
