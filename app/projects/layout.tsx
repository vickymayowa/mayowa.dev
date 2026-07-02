import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Projects — React, Vue & Node.js Portfolio",
  description:
    "Full-stack web development projects: SaaS dashboards, webhook systems, inventory apps, VPS deployment tools, and UI/UX design systems by Favour Mayowa.",
  path: "/projects",
  keywords: [
    "react developer portfolio",
    "full stack projects",
    "SaaS dashboard",
    "web development portfolio",
  ],
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
