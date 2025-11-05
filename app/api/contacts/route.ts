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
            const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f5f7fa; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
    .header { background: #0d6efd; color: #fff; padding: 24px 32px; font-size: 20px; font-weight: 600; }
    .content { padding: 32px; color: #333; line-height: 1.6; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #555; margin-bottom: 4px; }
    .value { color: #111; }
    .message-box { background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 16px; border-radius: 4px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 24px; font-size: 14px; color: #6c757d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">New Contact Form Submission</div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
      </div>
    </div>
    <div class="footer">Sent via your portfolio contact form</div>
  </div>
</body>
</html>
            `.trim()

            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "techiedevmayowa@gmail.com",
                subject: `New message from ${name}`,
                html: emailHtml,
            })
            
        } catch (emailError) {
            console.error("Email send error:", emailError)
        }

        return NextResponse.json({ data, success: true, message: "Contact information submitted successfully!" })
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
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
        return NextResponse.json({ error: "Something Went Wrong" }, { status: 500 })
    }
}
