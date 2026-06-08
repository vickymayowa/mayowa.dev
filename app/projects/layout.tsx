import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Portfolio of websites and web applications built by Favour Mayowa using modern web technologies.",
  path: "/projects",
  keywords: ["portfolio projects", "Next.js projects", "full-stack applications"],
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
