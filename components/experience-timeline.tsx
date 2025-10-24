"use client"

import { CheckCircle2 } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  date: string
  description: string
  highlights: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

      {/* Timeline items */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative pl-24 animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
              <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

            {/* Content card */}
            <div className="card hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">{exp.date}</span>
              </div>

              <p className="text-foreground/70 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200"
                  >
                    <CheckCircle2 size={14} className="text-primary" />
                    <span className="text-sm text-primary">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
