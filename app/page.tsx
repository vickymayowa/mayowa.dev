import type { Metadata } from "next"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Services from "@/components/services"
import FeaturedProjects from "@/components/featured-projects"
import CtaSection from "@/components/cta-section"
import JsonLdScript from "@/components/json-ld"
import { createPageMetadata } from "@/lib/seo/metadata"
import { personSchema, projectSchema } from "@/lib/seo/json-ld"
import { siteConfig } from "@/lib/seo/site"
import { getProjects } from "@/lib/data"

export const metadata: Metadata = createPageMetadata({
  title: "Full-Stack Software Developer & Web Development Specialist",
  description:
    "Full-Stack Software Developer building scalable React, Vue, Node.js web apps, SaaS dashboards, APIs, UI/UX systems, and VPS hosting-ready infrastructure.",
  path: "/",
  keywords: [
    "software developer",
    "full stack developer",
    "react developer",
    "web development services",
  ],
})

export default async function Home() {
  const projects = await getProjects()
  const featured = projects.slice(0, 5)

  return (
    <>
      <JsonLdScript
        data={[
          personSchema(),
          ...featured.map((project) => projectSchema(project)),
        ]}
      />
      <Hero />
      <TechStack />
      <Services limit={3} />
      <FeaturedProjects />
      <CtaSection />
    </>
  )
}
