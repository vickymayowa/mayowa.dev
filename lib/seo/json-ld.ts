import type { Project } from "@/lib/db"
import { absoluteUrl, siteConfig } from "./site"
import { projectSlug } from "@/lib/slug"

export type JsonLd = Record<string, unknown>

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.location,
      addressCountry: "NG",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.twitter],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full-Stack Development",
      "Web Performance",
    ],
  }
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.shortTitle} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Software Engineering`,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Frontend Development",
      "Backend Engineering",
      "Full-Stack Development",
      "Web Performance Optimization",
    ],
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function creativeWorkSchema(project: Project): JsonLd {
  const slug = projectSlug(project.title)

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image.startsWith("http") ? project.image : absoluteUrl(project.image),
    url: absoluteUrl(`/projects/${slug}`),
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.tags.join(", "),
    ...(project.live_url && { sameAs: project.live_url }),
  }
}

export function profilePageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `About ${siteConfig.name}`,
    url: absoluteUrl("/about"),
    mainEntity: personSchema(),
  }
}

export function reviewSchema(
  reviews: Array<{ name: string; role: string; content: string; rating: number }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
        jobTitle: review.role,
      },
      reviewBody: review.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
  }
}
