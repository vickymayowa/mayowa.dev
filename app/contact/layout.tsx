import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Contact — Hire a Full-Stack Web Developer",
  description:
    "Contact Favour Mayowa for web development, UI/UX design, API integration, SaaS builds, web hosting setup, and VPS deployment. Let's build your project.",
  path: "/contact",
  keywords: ["hire web developer", "contact full stack developer", "web development services"],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
