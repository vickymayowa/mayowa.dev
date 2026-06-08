import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Technical services provided by Favour Mayowa including frontend development, backend architecture, and full-stack solutions.",
  path: "/services",
  keywords: ["web development services", "full-stack development", "frontend backend engineering"],
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
