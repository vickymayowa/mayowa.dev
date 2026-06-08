import { Sparkles } from "lucide-react"
import ExperienceTimeline from "@/components/experience-timeline"
import JsonLdScript from "@/components/json-ld"
import { getExperience } from "@/lib/data"
import { breadcrumbSchema } from "@/lib/seo/json-ld"

export default async function ExperiencePage() {
  const experiences = await getExperience()

  return (
    <div className="section-container min-h-screen">
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />

      <header className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} aria-hidden="true" />
          Career Path
        </div>
        <h1 className="mb-6 leading-tight">My Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Here is a list of the places I have worked and the websites and web applications I have built and maintained.
        </p>
      </header>

      <ExperienceTimeline experiences={experiences} />
    </div>
  )
}
