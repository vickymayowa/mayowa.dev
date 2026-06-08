import type { Metadata } from "next"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Services from "@/components/services"
import FeaturedProjects from "@/components/featured-projects"
import JsonLdScript from "@/components/json-ld"
import { createPageMetadata } from "@/lib/seo/metadata"
import { personSchema } from "@/lib/seo/json-ld"
import { siteConfig } from "@/lib/seo/site"

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
  keywords: ["Favour Mayowa", "portfolio", "software engineer Nigeria"],
})

export default function Home() {
  return (
    <>
      <JsonLdScript data={personSchema()} />
      <Hero />
      <TechStack />
      <Services />
      <FeaturedProjects />
    </>
  )
}
