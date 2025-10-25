"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const terminalText = "Favour Mayowa"
  const commands = [
    "$ initializing portfolio...",
    "$ loading projects...",
    "$ compiling experience...",
    "$ connecting database...",
    "$ portfolio ready!",
  ]

  // Typing effect for name
  useEffect(() => {
    if (displayedText.length < terminalText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(terminalText.slice(0, displayedText.length + 1))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [displayedText])

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 300)
    return () => clearInterval(timer)
  }, [])

  // Hide loading screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="w-full max-w-2xl mx-4 bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
        {/* Terminal header */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-sm ml-2">portfolio — bash</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm h-64 flex flex-col justify-between">
          {/* Command output */}
          <div className="space-y-2">
            {commands.map((cmd, idx) => (
              <div key={idx} className="text-green-400 animate-fade-in" style={{ animationDelay: `${idx * 0.3}s` }}>
                {cmd}
              </div>
            ))}
          </div>

          {/* Name with typing effect */}
          <div className="space-y-3">
            <div className="text-slate-400">
              $ <span className="text-cyan-400">echo</span> <span className="text-yellow-400">"Full Stack Developer"</span>
            </div>
            <div className="text-green-400 text-lg font-bold">
              {displayedText}
              <span className={`ml-1 ${showCursor ? "bg-green-400" : "bg-transparent"}`}>▌</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  )
}
