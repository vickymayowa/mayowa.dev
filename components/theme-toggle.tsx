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
    return <div className="w-14 h-14" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 flex items-center justify-center rounded-[1.25rem] bg-muted/50 border border-border/50 hover:bg-muted hover:border-primary/30 transition-all duration-300 active:scale-90 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div className={`absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Sun size={24} className="text-amber-400" />
        </div>
        <div className={`absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${theme === 'dark' ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <Moon size={24} className="text-primary" />
        </div>
      </div>
    </button>
  )
}
