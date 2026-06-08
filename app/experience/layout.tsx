import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Career path and professional working experience of Favour Mayowa, demonstrating expertise as a Core Software Engineer.",
  path: "/experience",
  keywords: ["software engineer experience", "career history", "work experience"],
})

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
