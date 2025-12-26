import { type NextRequest, NextResponse } from "next/server"
import { readDB } from "../../../../lib/db"

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()

  try {
    const db = await readDB()

    // Find admin credentials
    const admin = db.admin_credentials.find(
      (cred) => cred.username === username && cred.password === password
    )

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const response = NextResponse.json({ success: true }, { status: 200 })

    response.cookies.set({
      name: "admin_session",
      value: JSON.stringify({ username, id: admin.id }),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
