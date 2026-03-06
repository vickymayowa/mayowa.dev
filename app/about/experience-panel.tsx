"use client"

import { useState } from "react"

interface Experience {
    id: string
    role: string
    company: string
    date: string
    current?: boolean
    description: string
    skills: string[]
    location: string
}

export default function ExperiencePanel({ experiences }: { experiences: Experience[] }) {
    const [activeExp, setActiveExp] = useState(0)

    if (!experiences || experiences.length === 0) {
        return (
            <p className="text-muted-foreground text-sm">No experience entries found.</p>
        )
    }

    return (
        <div className="grid md:grid-cols-[280px_1fr] gap-0">
            {/* Left: Timeline Nav */}
            <div className="relative border-r border-border/50 pr-0 md:pr-6 pb-6 md:pb-0">
                <div className="space-y-1">
                    {experiences.map((exp, i) => (
                        <button
                            key={exp.id}
                            onClick={() => setActiveExp(i)}
                            className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeExp === i
                                    ? "bg-primary/10 border border-primary/20"
                                    : "hover:bg-secondary border border-transparent"
                                }`}
                        >
                            {/* Dot */}
                            <div
                                className={`mt-1.5 shrink-0 w-2.5 h-2.5 rounded-full border-2 border-background transition-all duration-300 ${activeExp === i
                                        ? "bg-primary scale-125"
                                        : exp.current
                                            ? "bg-primary/60"
                                            : "bg-muted-foreground/30 group-hover:bg-primary/50"
                                    }`}
                            />
                            <div className="min-w-0">
                                <p
                                    className={`text-sm font-bold leading-tight truncate transition-colors ${activeExp === i ? "text-primary" : "text-foreground"
                                        }`}
                                >
                                    {exp.role}
                                </p>
                                <p className="text-[11px] text-muted-foreground truncate">{exp.company}</p>
                                <p className="text-[10px] text-muted-foreground/60 mt-0.5">{exp.date}</p>
                            </div>
                            {exp.current && (
                                <span className="shrink-0 ml-auto px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-primary/20 text-primary border border-primary/30">
                                    NOW
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Detail Panel */}
            <div className="md:pl-8 pt-6 md:pt-0">
                <div key={activeExp} className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{experiences[activeExp].role}</h3>
                            <p className="text-primary font-semibold text-sm mt-0.5">{experiences[activeExp].company}</p>
                            {experiences[activeExp].location && (
                                <p className="text-muted-foreground/60 text-xs mt-0.5">{experiences[activeExp].location}</p>
                            )}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                            {experiences[activeExp].date}
                        </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-5">
                        {experiences[activeExp].description}
                    </p>

                    {experiences[activeExp].skills?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {experiences[activeExp].skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 rounded-lg bg-secondary border border-border text-xs font-semibold text-secondary-foreground"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Progress dots */}
                    <div className="flex gap-1.5 mt-8">
                        {experiences.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveExp(i)}
                                className={`rounded-full transition-all duration-300 ${i === activeExp
                                        ? "w-6 h-1.5 bg-primary"
                                        : "w-1.5 h-1.5 bg-border hover:bg-primary/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
