import Link from "next/link"
import { createPageMetadata } from "@/lib/seo/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Favour Mayowa's portfolio website.",
  path: "/404",
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="section-container min-h-[70vh] flex flex-col items-center justify-center text-center">
      <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">404</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Page Not Found</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-10">
        The page you requested could not be found. It may have been moved or removed.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-premium">
          Back to Home
        </Link>
        <Link href="/projects" className="btn-outline-premium">
          View Projects
        </Link>
      </div>
    </div>
  )
}
