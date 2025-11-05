"use client"

import { useState, useEffect } from "react"
import AdminDashboard from "../../components/admin-dashboard"
import AdminLogin from "../../components/admin-login"
import { Loader2 } from "lucide-react"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/auth/check-session")
        const data = await response.json()
        setIsLoggedIn(data.authenticated)
      } catch (error) {
        console.error("Session check failed:", error)
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-foreground/70">Checking session...</p>
        </div>
      </div>
    )
  }

  return isLoggedIn ? (
    <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <AdminLogin onLogin={() => setIsLoggedIn(true)} />
  )
}
