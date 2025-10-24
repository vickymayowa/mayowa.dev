"use client"

import { useState } from "react"
import AdminDashboard from "@/components/admin-dashboard"
import AdminLogin from "@/components/admin-login"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <AdminLogin onLogin={() => setIsLoggedIn(true)} />
  )
}
