"use client"

import { ArrowRight, Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import Link from "next/link"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from "react-icons/si"
import CVSection from "./cv-section"

export default function Hero() {
  const featuredTechs = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-sky-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-600" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,var(--color-primary)_0%,transparent_50%)] opacity-[0.03]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]"
        />
      </div>

      <div className="max-w-5xl w-full relative z-10 py-20">
        <div className="space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 italic">
              Building <span className="text-primary not-italic">Premium</span> <br />
              Digital Experiences.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              I'm <span className="text-foreground font-semibold">Favour Mayowa</span>, a Full-Stack Engineer specializing in architectural excellence and high-performance web applications. Turning complex problems into elegant, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/projects" className="btn-premium group">
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <CVSection />
          </div>

          {/* Tech Stack Subtle Row */}
          <div className="pt-12 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6">Expertise in</p>
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {featuredTechs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2.5 group cursor-default">
                  <tech.icon className={`text-xl ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link href="https://github.com/vickymayowa" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/favour-adebanjo/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:techiedevmayowa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
