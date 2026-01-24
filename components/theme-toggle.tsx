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

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-300 active:scale-90 group"
      aria-label="Toggle theme"
    >
      <div className="relative overflow-hidden w-5 h-5">
        <div className={`absolute inset-0 transition-transform duration-500 ${theme === 'dark' ? 'translate-y-0' : 'translate-y-10'}`}>
          <Sun size={20} className="text-amber-400" />
        </div>
        <div className={`absolute inset-0 transition-transform duration-500 ${theme === 'dark' ? '-translate-y-10' : 'translate-y-0'}`}>
          <Moon size={20} className="text-primary" />
        </div>
      </div>
    </button>
  )
}
