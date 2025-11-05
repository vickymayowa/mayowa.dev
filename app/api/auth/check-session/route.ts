import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get("admin_session")

  if (!sessionCookie) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  try {
    const session = JSON.parse(sessionCookie.value)
    return NextResponse.json({ authenticated: true, user: session }, { status: 200 })
  } catch (error) {
    console.error("[v0] Session check error:", error)
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
