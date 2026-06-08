"use client"

import { useEffect, useState } from "react"
import { Command } from "lucide-react"

const SESSION_KEY = "portfolio-loaded"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem(SESSION_KEY)

    if (hasLoaded) {
      return
    }

    setIsVisible(true)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 15)

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true")
      setIsVisible(false)
    }, 1200)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ease-in-out antialiased"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="relative mb-12 animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center border border-primary/20 relative group">
          <Command size={32} className="text-primary animate-pulse" aria-hidden="true" />
          <div className="absolute inset-[-8px] border border-primary/10 rounded-[2.5rem] animate-[spin_8s_linear_infinite]" />
        </div>
      </div>

      <div className="w-48 space-y-4">
        <div className="flex justify-between items-end">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Initializing</p>
          <p className="text-[10px] font-bold text-primary tabular-nums" aria-hidden="true">{progress}%</p>
        </div>
        <div className="h-[2px] w-full bg-muted overflow-hidden rounded-full" aria-hidden="true">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
