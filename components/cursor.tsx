"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const trailingRef = useRef<HTMLDivElement>(null)
    const [isPointer, setIsPointer] = useState(false)

    // Use refs for positions to avoid re-renders
    const position = useRef({ x: -100, y: -100 }) // Start off-screen
    const trailingPos = useRef({ x: -100, y: -100 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            position.current = { x: e.clientX, y: e.clientY }

            const target = e.target as HTMLElement
            // Check if hovering over clickable element
            const isClickable =
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"

            setIsPointer(!!isClickable)

            // Update main cursor instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${isClickable ? 1.5 : 1})`
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        let animationFrameId: number

        const animateTrailing = () => {
            // Linear interpolation (Lerp) for smooth trailing
            const ease = 0.15

            const dx = position.current.x - trailingPos.current.x
            const dy = position.current.y - trailingPos.current.y

            trailingPos.current.x += dx * ease
            trailingPos.current.y += dy * ease

            if (trailingRef.current) {
                const scale = isPointer ? 1.5 : 1
                trailingRef.current.style.transform = `translate3d(${trailingPos.current.x}px, ${trailingPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`

                // Dynamic opacity based on movement speed could be cool too
                // trailingRef.current.style.opacity = Math.abs(dx) + Math.abs(dy) > 1 ? "1" : "0.5"
            }

            animationFrameId = requestAnimationFrame(animateTrailing)
        }

        animateTrailing()
        return () => cancelAnimationFrame(animationFrameId)
    }, [isPointer]) // Re-run if pointer state changes to update scale logic, but use position ref inside loop

    return (
        <>
            <style jsx global>{`
        body, a, button {
          cursor: none !important;
        }
      `}</style>

            {/* Main Cursor Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ transform: "translate3d(-100px, -100px, 0)" }}
            />

            {/* Trailing Ring */}
            <div
                ref={trailingRef}
                className={`fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] transition-colors duration-300 ${isPointer ? "bg-primary/10 border-primary" : "bg-transparent"
                    }`}
                style={{ transform: "translate3d(-100px, -100px, 0)" }}
            />
        </>
    )
}
