"use client"

import { useEffect, useState } from "react"
import ExperienceTimeline from "@/components/experience-timeline"
import { SkeletonGrid } from "@/components/skeleton"
import { Experience } from "@/types/experience"


export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch("/api/experience")
        const { data } = await response.json()
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
    <div className="section-container">
      <div className="mb-12">
        <h1 className="mb-4">Work Experience</h1>
        <p className="text-foreground/70 max-w-2xl">
          My professional journey in web development, showcasing roles, responsibilities, and key achievements.
        </p>
      </div>

      {isLoading ? <SkeletonGrid count={4} /> : <ExperienceTimeline experiences={experiences} />}
    </div>
  )
}
