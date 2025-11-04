import { createSupabaseServerClient } from "../../../lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const supabase = await createSupabaseServerClient()
        const { name, email, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const { data, error } = await supabase.from("contacts").insert([{ name, email, message }]).select()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        try {
            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "favormayowa@example.com",
                subject: `New message from ${name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
            })
        } catch (emailError) {
            console.error("Email send error:", emailError)
            // Don't fail the API if email doesn't send
        }

        return NextResponse.json({ data, success: true })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const supabase = await createSupabaseServerClient()

        const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
