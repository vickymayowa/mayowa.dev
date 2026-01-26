"use client"

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiAmazon,
  SiGit,
  SiSupabase,
  SiVercel,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiPrisma,
} from "react-icons/si"
import { Layout, Server, Wrench, Database } from "lucide-react"

const techCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Architecting responsive and interactive user interfaces.",
    skills: [
      { name: "React", icon: SiReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
      { name: "Redux", icon: SiRedux, color: "text-violet-500" },
      // { name: "Tanstack", icon: S, color: "text-violet-500" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Building robust, scalable server-side architectures.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
      { name: "Express", icon: SiExpress, color: "text-muted-foreground" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-emerald-500" },
      { name: "FIrebase", icon: SiFirebase, color: "text-emerald-500" },
      // { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Database,
    description: "Containerization, deployment, and cloud infrastructure.",
    skills: [
      // { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      // { name: "VPS", icon: , color: "text-orange-600" },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="section-container border-t border-border/50">
      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-6 leading-tight">Expertise & <span className="text-primary italic">Technical Arsenal</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I leverage a modern, battle-tested stack to deliver high-performance solutions that scale with your business needs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <div
            key={category.title}
            className="group flex flex-col p-8 rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <category.icon className="text-primary" size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 tracking-tight">{category.title}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed italic">
              {category.description}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-transparent hover:border-primary/10 hover:bg-background transition-all duration-300 group/skill"
                >
                  <skill.icon className={`text-lg ${skill.color} opacity-70 group-hover/skill:opacity-100 transition-opacity`} />
                  <span className="text-xs font-semibold text-muted-foreground group-hover/skill:text-foreground transition-colors uppercase tracking-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
