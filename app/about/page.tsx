import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Coffee,
  Zap,
  Code2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Star,
  ExternalLink,
  Briefcase,
  Palette,
  Cloud,
} from "lucide-react"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVuedotjs,
  SiDocker,
  SiGit,
  SiSupabase,
  SiVercel,
  SiShadcnui,
  SiX,
} from "react-icons/si"
import ExperiencePanel from "./experience-panel"
import JsonLdScript from "@/components/json-ld"
import { getExperience } from "@/lib/data"
import { createPageMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, profilePageSchema } from "@/lib/seo/json-ld"
import { siteConfig } from "@/lib/seo/site"

export const metadata: Metadata = createPageMetadata({
  title: "About — Full-Stack Developer & UI/UX Engineer",
  description:
    "Learn about Favour Mayowa, a Full-Stack Software Developer specializing in scalable web apps, UI/UX design systems, APIs, and VPS hosting infrastructure.",
  path: "/about",
  keywords: ["about full stack developer", "UI/UX developer", "backend engineer"],
})

const techStack = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "React", icon: SiReact, color: "text-sky-400", bg: "bg-sky-400/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", bg: "bg-foreground/10" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "ShadCN UI", icon: SiShadcnui, color: "text-foreground", bg: "bg-foreground/10" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Vercel", icon: SiVercel, color: "text-foreground", bg: "bg-foreground/10" },
  { name: "Git", icon: SiGit, color: "text-orange-500", bg: "bg-orange-500/10" },
]

const values = [
  { icon: Code2, title: "Clean, Scalable Code", desc: "TypeScript-first codebases with clear architecture — built to grow with your product and team." },
  { icon: Palette, title: "UI/UX That Converts", desc: "Interfaces designed for clarity, accessibility, and user delight — from dashboards to marketing sites." },
  { icon: Zap, title: "Performance Obsessed", desc: "Lighthouse 95+ targets, optimized fonts, lazy-loaded images, and minimal client-side JavaScript." },
  { icon: Layers, title: "Full-Stack Ownership", desc: "From database schema and APIs to pixel-perfect React and Vue frontends — end to end." },
  { icon: Cloud, title: "Hosting-Ready Systems", desc: "VPS hosting setup, Docker deployment, Vercel pipelines, and production infrastructure you can trust." },
  { icon: Server, title: "Systems & Scale", desc: "Architecture that handles real-world traffic — SaaS platforms, webhooks, and multi-tenant data models." },
]

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "5+", label: "Companies & Clients" },
  { value: "20+", label: "Technologies" },
]

const skills = [
  { label: "Frontend & UI/UX", pct: 95, color: "bg-primary" },
  { label: "Backend & APIs", pct: 88, color: "bg-indigo-500" },
  { label: "Database Design", pct: 85, color: "bg-emerald-500" },
  { label: "DevOps & Hosting", pct: 80, color: "bg-orange-400" },
  { label: "SaaS Architecture", pct: 82, color: "bg-sky-400" },
]

export default async function AboutPage() {
  const experiences = await getExperience()

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden">
      <JsonLdScript
        data={[
          profilePageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.07]" aria-hidden="true" />

        <div className="relative z-10 container px-6 text-center max-w-4xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Full-Stack Developer &amp; Web Development Specialist
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            About <span className="text-gradient italic">{siteConfig.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Full-Stack Software Developer focused on building scalable web applications, SaaS platforms, dashboards, backend systems, APIs, UI/UX design systems, and hosting-ready infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {[
              { icon: MapPin, text: siteConfig.location },
              { icon: Calendar, text: "3+ Years Exp." },
              { icon: Coffee, text: "Open to Remote Work" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground font-medium"
              >
                <Icon size={13} className="text-primary" />
                {text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Link href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="btn-outline-premium text-sm py-2 px-4" aria-label="GitHub profile">
              <Github size={15} /> GitHub
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline-premium text-sm py-2 px-4" aria-label="LinkedIn profile">
              <Linkedin size={15} /> LinkedIn
            </Link>
            <Link href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="btn-outline-premium text-sm py-2 px-4" aria-label="X profile">
              <SiX size={14} /> X
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className="btn-premium text-sm py-2 px-4" aria-label="Send email">
              <Mail size={15} /> Email Me
            </Link>
          </div>
        </div>
      </section>

      <div className="container px-6 mx-auto max-w-5xl mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-premium text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1 font-heading">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-5xl mt-8 space-y-6">
        <article className="card-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-primary fill-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">My Story</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Building scalable web products with a developer&apos;s precision and a designer&apos;s eye.
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Over 3+ years, I&apos;ve shipped fintech platforms, SaaS analytics dashboards, inventory systems, NGO websites, and real-time applications — used by teams and users across the globe.
                </p>
                <p>
                  My philosophy is simple: great web development combines clean TypeScript code, thoughtful UI/UX, and infrastructure that&apos;s ready for production. I work across the full stack with{" "}
                  <span className="text-foreground font-semibold">React, Next.js, Vue.js, Node.js, Express.js, PostgreSQL, MongoDB, and Supabase</span>.
                </p>
                <p>
                  Beyond code, I configure <span className="text-foreground font-semibold">web hosting, VPS deployment, Docker containers, and Vercel pipelines</span> — so projects don&apos;t just launch, they stay fast, secure, and maintainable.
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center min-w-[180px] text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <span className="text-5xl text-primary/20 font-serif leading-none mb-2">&ldquo;</span>
              <p className="text-sm italic text-foreground/70 leading-relaxed">
                Ship fast, scale smart, and design for humans.
              </p>
              <span className="text-5xl text-primary/20 font-serif leading-none mt-2 rotate-180">&rdquo;</span>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-premium group flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                <Icon
                  size={18}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-premium space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Proficiency</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Core Skill Areas</h2>
            {skills.map((s) => (
              <div key={s.label} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">{s.label}</span>
                  <span className="text-xs font-bold text-primary">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className={`h-full rounded-full ${s.color}`}
                    style={{ width: `${s.pct}%` }}
                    role="progressbar"
                    aria-valuenow={s.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={s.label}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="card-premium">
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Tech Stack</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Tools I Work With</h2>
            <div className="grid grid-cols-3 gap-2">
              {techStack.map(({ name, icon: Icon, color, bg }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl ${bg} border border-border/50 hover:border-primary/30 hover:scale-105 transition-all duration-200 cursor-default`}
                >
                  <Icon className={`text-2xl ${color}`} aria-hidden="true" />
                  <span className="text-[10px] font-semibold text-muted-foreground text-center leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="card-premium">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Career Journey</span>
          </div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Experience Timeline</h2>
            <span className="text-xs text-muted-foreground font-medium">
              {experiences.length} role{experiences.length !== 1 ? "s" : ""}
            </span>
          </div>

          <ExperiencePanel experiences={experiences} />
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-12 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[80px] pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s build your web project</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Looking for a TypeScript developer, React developer, or full-stack engineer for web development, UI/UX, or VPS hosting setup? Let&apos;s talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-premium group">
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-premium"
                aria-label="View LinkedIn profile"
              >
                <Linkedin size={15} />
                LinkedIn Profile
                <ExternalLink size={13} className="ml-1 opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
