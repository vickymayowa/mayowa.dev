import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Favour Mayowa. Available for collaboration on web development and backend engineering opportunities.",
  path: "/contact",
  keywords: ["hire Favour Mayowa", "contact software engineer"],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
