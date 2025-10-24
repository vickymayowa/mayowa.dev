"use client"

import type React from "react"

import { useState } from "react"
import { Lock } from "lucide-react"

interface AdminLoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple password check (in production, use proper authentication)
    if (password === "admin123") {
      onLogin()
    } else {
      setError("Invalid password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/50">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-lg">
              <Lock className="text-primary" size={32} />
            </div>
          </div>

          <h1 className="text-center mb-2">Admin Access</h1>
          <p className="text-center text-foreground/70 mb-8">Enter the admin password to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm">{error}</div>}

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter admin password"
                autoFocus
              />
              <p className="text-xs text-foreground/50 mt-2">Demo password: admin123</p>
            </div>

            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
