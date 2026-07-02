import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Web Development & VPS Hosting Services",
  description:
    "Professional web development services: React, Vue, Node.js apps, UI/UX design, API development, SaaS builds, web hosting setup, and VPS deployment.",
  path: "/services",
  keywords: [
    "web development services",
    "VPS hosting setup",
    "web hosting",
    "SaaS development",
    "API development",
  ],
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
