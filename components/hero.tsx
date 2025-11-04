"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si"
import HireMeModal from "./hire-me-modal"
import CVSection from "./cv-section"

export default function Hero() {
  const featuredTechs = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "SQL", icon: SiMysql, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  ]

  const floatingIcons = [
    { icon: SiReact, color: "text-blue-400", top: "10%", left: "5%", delay: "0s" },
    { icon: SiNextdotjs, color: "text-white", top: "15%", right: "8%", delay: "0.2s" },
    { icon: SiNodedotjs, color: "text-green-500", top: "20%", left: "12%", delay: "0.4s" },
    { icon: SiVuedotjs, color: "text-green-400", top: "25%", right: "10%", delay: "0.6s" },
    { icon: SiTypescript, color: "text-blue-500", top: "12%", right: "15%", delay: "0.6s" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div
              key={index}
              className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                animation: `float 6s ease-in-out infinite`,
                animationDelay: item.delay,
              }}
            >
              <IconComponent className={`text-6xl ${item.color}`} />
            </div>
          )
        })}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Full-Stack Developer • 3+ Years Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Favour Mayowa
            </span>
          </h1>

          <p className="text-lg text-foreground/80 mb-6 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Full-stack developer with 3+ years of experience in JavaScript and TypeScript. I specialize in building
            scalable, responsive web applications using the MERN stack, with expertise in modern frontend frameworks and
            robust backend solutions.
          </p>

          <p className="text-base text-foreground/70 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Proficient in React.js, Vue.js, Next.js, Angular, Node.js, Express.js, MongoDB, Supabase, and SQL.
            Experienced with VPS server management, AWS deployment, and application security best practices. Dedicated
            to delivering reliable, user-focused web applications.
          </p>

          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-250">
            <p className="text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {featuredTechs.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div
                    key={tech.name}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${0.3 + index * 0.05}s both`,
                    }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                      <IconComponent className={`text-xl ${tech.color}`} />
                      <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Link
              href="/projects"
              className="btn-primary flex items-center gap-2 group hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <HireMeModal /> */}
            <CVSection />
          </div>

          {/* <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-350"> */}
            {/* <CVSection /> */}
          {/* </div> */}

          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <Link
              href="https://github.com/vickymayowa"
              className="p-3 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/favour-adebanjo/"
              className="p-3 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:techiedevmayowa@gmail.com"
              className="p-3 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
