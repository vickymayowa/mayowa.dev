import type { LucideIcon } from "lucide-react"
import {
  Layout,
  Server,
  Palette,
  Plug,
  Layers,
  Globe,
  Cloud,
  Gauge,
} from "lucide-react"

export type Service = {
  slug: string
  title: string
  description: string
  benefits: string[]
  tools: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom React, Vue, and Node.js web applications engineered for performance, accessibility, and long-term maintainability — from MVPs to production SaaS platforms.",
    benefits: [
      "Responsive, mobile-first interfaces",
      "Type-safe codebases with TypeScript",
      "SEO-ready architecture with Next.js App Router",
      "Scalable component systems with ShadCN UI",
    ],
    tools: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "TailwindCSS"],
    icon: Layout,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design for Web Applications",
    description:
      "User-centered interface design and design systems that improve conversion, reduce friction, and deliver polished experiences across dashboards, SaaS products, and marketing sites.",
    benefits: [
      "Clear information architecture and user flows",
      "Consistent design tokens and component libraries",
      "Accessibility-first layouts (WCAG-minded)",
      "Prototype-to-production handoff",
    ],
    tools: ["Figma", "ShadCN UI", "TailwindCSS", "Framer Motion", "Design Systems"],
    icon: Palette,
  },
  {
    slug: "api-development",
    title: "API Development & Integration",
    description:
      "RESTful and real-time APIs built with Node.js and Express — authentication, webhooks, third-party integrations, and secure data pipelines for modern web products.",
    benefits: [
      "Secure authentication and authorization",
      "Webhook management and event-driven flows",
      "Third-party payment and service integrations",
      "Documented, testable API contracts",
    ],
    tools: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Supabase", "Redis"],
    icon: Plug,
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development — multi-tenant architecture, subscription billing hooks, analytics dashboards, admin panels, and deployment-ready infrastructure.",
    benefits: [
      "Multi-tenant data modeling",
      "Role-based access control",
      "Analytics and reporting dashboards",
      "Production deployment pipelines",
    ],
    tools: ["Next.js", "Supabase", "PostgreSQL", "Stripe", "Docker", "Vercel"],
    icon: Layers,
  },
  {
    slug: "web-hosting-setup",
    title: "Web Hosting Setup",
    description:
      "Professional web hosting setup and deployment — domain configuration, SSL, CDN, environment management, and reliable go-live support for business websites and web apps.",
    benefits: [
      "Domain and DNS configuration",
      "SSL/TLS and HTTPS enforcement",
      "Staging and production environments",
      "Monitoring and uptime best practices",
    ],
    tools: ["Vercel", "Cloudflare", "Nginx", "GitHub Actions", "Environment Variables"],
    icon: Globe,
  },
  {
    slug: "vps-hosting",
    title: "VPS Hosting Configuration & Deployment",
    description:
      "VPS hosting setup and deployment for teams that need full server control — Linux configuration, Docker containers, reverse proxies, database hosting, and automated deployments.",
    benefits: [
      "Linux server hardening and setup",
      "Docker-based application deployment",
      "Reverse proxy and load balancing",
      "Database backup and recovery planning",
    ],
    tools: ["Docker", "Nginx", "Ubuntu", "PM2", "PostgreSQL", "MongoDB"],
    icon: Cloud,
  },
  {
    slug: "performance-optimization",
    title: "Website Optimization & Performance Tuning",
    description:
      "Core Web Vitals optimization, Lighthouse audits, caching strategies, and bundle analysis to make web applications faster, more discoverable, and conversion-ready.",
    benefits: [
      "Lighthouse 95+ performance targets",
      "Image and font optimization",
      "Caching and CDN configuration",
      "SEO technical improvements",
    ],
    tools: ["Next.js", "Vercel Analytics", "Lighthouse", "TailwindCSS", "Server Components"],
    icon: Gauge,
  },
]
