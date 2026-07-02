import type { Project } from "@/lib/db"
import { services, type Service } from "@/lib/services"
import { absoluteUrl, siteConfig } from "./site"
import { projectSlug } from "@/lib/slug"

export type JsonLd = Record<string, unknown>

const knowsAbout = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "TailwindCSS",
  "ShadCN UI",
  "Docker",
  "Vercel",
  "VPS Hosting",
  "Web Hosting",
  "UI/UX Design",
  "Full-Stack Development",
  "SaaS Development",
  "API Development",
  "Web Performance Optimization",
]

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.location,
      addressCountry: "NG",
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    knowsAbout,
  }
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.shortTitle} — Full-Stack Developer Portfolio`,
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
    name: `${siteConfig.name} — Web Development Services`,
    url: absoluteUrl("/services"),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "UI/UX Design",
      "API Development",
      "SaaS Development",
      "Web Hosting Setup",
      "VPS Hosting Configuration",
      "Website Performance Optimization",
    ],
  }
}

export function serviceSchema(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services#${service.slug}`),
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  }
}

export function servicesListSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: serviceSchema(service),
    })),
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

export function projectSchema(project: Project): JsonLd {
  const slug = projectSlug(project.title)
  const image = project.image?.startsWith("http")
    ? project.image
    : project.image
      ? absoluteUrl(project.image)
      : absoluteUrl("/opengraph-image")

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    image,
    url: absoluteUrl(`/projects/${slug}`),
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.tags.join(", "),
    ...(project.live_url && { sameAs: project.live_url }),
    ...(project.github_link && {
      codeRepository: project.github_link,
    }),
  }
}

/** @deprecated Use projectSchema — kept for backward compatibility */
export function creativeWorkSchema(project: Project): JsonLd {
  return projectSchema(project)
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
