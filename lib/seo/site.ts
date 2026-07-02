export const siteConfig = {
  name: "Favour Mayowa",
  title:
    "Favour Mayowa | Full-Stack Software Developer & Web Development Specialist",
  shortTitle: "Favour Mayowa",
  description:
    "Full-Stack Software Developer & Web Development Specialist building scalable web applications, SaaS platforms, dashboards, APIs, UI/UX design systems, and hosting-ready infrastructure with TypeScript, React, Vue, and Node.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mayowa.dev",
  locale: "en_US",
  email: "techiedevmayowa@gmail.com",
  phone: "+2349167638933",
  location: "Oyo State, Nigeria",
  jobTitle: "Full-Stack Software Developer & Web Development Specialist",
  tagline:
    "Full-Stack Software Developer & UI/UX Engineer building scalable web applications and hosting-ready systems",
  social: {
    github: "https://github.com/vickymayowa",
    linkedin: "https://www.linkedin.com/in/favour-adebanjo/",
    twitter: "https://x.com/iamcodenior",
  },
  keywords: [
    "software developer",
    "full stack developer",
    "react developer",
    "vue developer",
    "node.js developer",
    "typescript developer",
    "backend engineer",
    "web developer",
    "UI/UX developer",
    "web development services",
    "web hosting",
    "VPS hosting setup",
    "Next.js developer",
    "SaaS development",
    "API development",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Docker deployment",
    "Vercel hosting",
    "Favour Mayowa portfolio",
  ],
  themeColor: {
    light: "#fafafa",
    dark: "#09090b",
  },
} as const

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path) return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
