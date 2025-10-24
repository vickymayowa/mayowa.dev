"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/providers"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="p-2 rounded-lg w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-border transition-all duration-200 group"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400 group-hover:scale-110 transition-transform duration-200" />
      ) : (
        <Moon size={20} className="text-slate-600 group-hover:scale-110 transition-transform duration-200" />
      )}
    </button>
  )
}
