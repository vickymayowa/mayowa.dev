import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Technical articles, guides, and thoughts on web development and engineering by Favour Mayowa.",
  path: "/blog",
  keywords: ["web development blog", "Next.js articles", "TypeScript guides"],
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
