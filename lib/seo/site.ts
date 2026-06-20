export const siteConfig = {
  name: "Favour Mayowa",
  title: "Favour Mayowa | Core Software Engineer & Full-Stack Developer",
  shortTitle: "Favour Mayowa",
  description:
    "Favour Mayowa is a Core Software Engineer and Full-Stack Developer with 3+ years of experience specializing in high-performance web applications, scalable system architecture, and modern TypeScript technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mayowa.dev",
  locale: "en_US",
  email: "techiedevmayowa@gmail.com",
  phone: "+2349167638933",
  location: "Oyo State, Nigeria",
  jobTitle: "Core Software Engineer & Full-Stack Developer",
  social: {
    github: "https://github.com/vickymayowa",
    linkedin: "https://www.linkedin.com/in/favour-adebanjo/",
    twitter: "https://x.com/iamcodenior",
  },
  keywords: [
    "Core Software Engineer",
    "Full-Stack Developer",
    "Senior Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "TypeScript",
    "React Expert",
    "Next.js Specialist",
    "Node.js Developer",
    "Vue.js",
    "Scalable Architecture",
    "System Design",
    "Web Performance Optimization",
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
