"use client"

import type React from "react"

import { useState } from "react"
import { LoadingSpinner } from "./loading-spinner"
import { Lock } from "lucide-react"
interface AdminLoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        onLogin()
      } else {
        setError(data.error || "Login failed")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
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
          <p className="text-center text-foreground/70 mb-8">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 bg-error/20 border border-error text-error rounded-lg text-sm">{error}</div>}

            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="Enter username"
                disabled={isLoading}
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="Enter password"
                disabled={isLoading}
              />
              {/* <p className="text-xs text-foreground/50 mt-2">Demo: username: admin, password: admin123</p> */}
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading && <LoadingSpinner size="sm" />}
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}