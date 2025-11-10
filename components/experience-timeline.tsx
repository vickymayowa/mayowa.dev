"use client"

import { CheckCircle2 } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  date: string
  description: string
  location: string
  skills: string[]
  highlights: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

      {/* Timeline items */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative sm:pl-24 animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot - hidden on mobile */}
            <div className="hidden sm:flex absolute left-0 top-2 w-16 h-16 items-center justify-center">
              <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

            {/* Content card */}
            <div className="card hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                  <p className="text-foreground/60 text-xs sm:text-sm">{exp.location}</p>
                </div>
                <span className="text-xs sm:text-sm text-foreground/60 whitespace-nowrap">{exp.date}</span>
              </div>

              <p className="text-foreground/70 mb-4 text-sm sm:text-base">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200"
                  >
                    <span className="text-xs sm:text-sm text-primary">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {exp.highlights &&
                  exp.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200"
                    >
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-primary">{highlight}</span>
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
