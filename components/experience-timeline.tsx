"use client"

import { CheckCircle2, Briefcase, Calendar, MapPin } from "lucide-react"
import { Experience } from "@/types/experience"

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-8">
      {/* Central line */}
      <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-border/50" />

      {/* Timeline items */}
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative pl-8 sm:pl-16 group"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
            }}
          >
            {/* Timeline Indicator */}
            <div className="absolute left-[-4px] sm:left-2.5 top-1.5 w-2 h-2 rounded-full bg-background border-2 border-primary group-hover:scale-150 transition-transform duration-500 z-10" />
            <div className="absolute left-[-8px] sm:left-1.5 top-0.5 w-4 h-4 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Date Tag - Mobile shows above, Desktop shows right or left (kept it simple for now) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/10">
                <Calendar size={12} />
                {exp.date}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider border border-border/50">
                <MapPin size={12} />
                {exp.location}
              </span>
            </div>

            {/* Content Card */}
            <div className="max-w-4xl bg-card border border-border/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-semibold text-muted-foreground">at</span>
                  <span className="text-lg font-bold text-foreground">{exp.company}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {exp.description}
              </p>

              {/* Grid of details */}
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills used */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted/50 border border-border/50 rounded-lg text-xs font-medium text-foreground/70 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
