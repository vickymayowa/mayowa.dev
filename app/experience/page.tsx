"use client"

import { useEffect, useState } from "react"
import ExperienceTimeline from "@/components/experience-timeline"
import { Skeleton } from "@/components/ui/skeleton"
import { Experience } from "@/types/experience"
import { Sparkles } from "lucide-react"

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch("/api/experience")
        const json = await response.json()
        const data: Experience[] = json.data
        setExperiences(data || [])
      } catch (error) {
        console.error("Failed to fetch experience:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchExperience()
  }, [])

  return (
    <div className="section-container min-h-screen">
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} />
          Career Path
        </div>
        <h1 className="mb-6 leading-tight">My Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Here is a list of the places I have worked and the websites and web applications I have built and maintained.
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="pl-16 relative">
              <Skeleton className="absolute left-4 top-2 w-px h-full" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-32 rounded-full" />
                <Skeleton className="h-10 w-64 rounded-xl" />
                <Skeleton className="h-24 w-full rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ExperienceTimeline experiences={experiences} />
      )}
    </div>
  )
}
