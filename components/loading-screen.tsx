"use client"

import { useEffect, useState } from "react"
import { Command } from "lucide-react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20)

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100] transition-opacity duration-1000 ease-in-out antialiased">
      <div className="relative mb-12 animate-in fade-in zoom-in duration-1000">
        <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center border border-primary/20 relative group">
          <Command size={32} className="text-primary animate-pulse" />
          <div className="absolute inset-[-8px] border border-primary/10 rounded-[2.5rem] animate-[spin_8s_linear_infinite]" />
        </div>
      </div>

      <div className="w-48 space-y-4">
        <div className="flex justify-between items-end">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Initializing</p>
          <p className="text-[10px] font-bold text-primary tabular-nums">{progress}%</p>
        </div>
        <div className="h-[2px] w-full bg-muted overflow-hidden rounded-full">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-center">
          <p className="text-[9px] font-medium text-muted-foreground/50 uppercase tracking-widest italic">Mayowa Professional Portfolio 2024</p>
        </div>
      </div>

      <div className="absolute bottom-12 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Premium Experience Loading</span>
      </div>
    </div>
  )
}
