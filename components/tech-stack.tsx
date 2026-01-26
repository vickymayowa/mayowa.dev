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
  SiReactquery,
  SiPhp,
  SiLaravel,
  SiAppwrite,
  SiLinux,
} from "react-icons/si"
import { Layout, Server, Database, Cloud, Code2 } from "lucide-react"

const techCategories = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    description: "Architecting responsive, performant, and visually stunning user interfaces.",
    skills: [
      { name: "React", icon: SiReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Redux", icon: SiRedux, color: "text-violet-500" },
      { name: "TanStack", icon: SiReactquery, color: "text-rose-500" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Building robust, scalable server-side architectures and complex business logic.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-rose-600" },
      { name: "Express", icon: SiExpress, color: "text-muted-foreground" },
      { name: "Appwrite", icon: SiAppwrite, color: "text-rose-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Managing data persistence, containerization, and automated deployment pipelines.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
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
            className="group flex flex-col p-8 rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 relative z-10">
              <category.icon className="text-primary" size={28} />
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10">{category.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 italic relative z-10">
              {category.description}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-3 relative z-10">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-background transition-all duration-300 group/skill"
                >
                  <skill.icon className={`text-xl ${skill.color} opacity-80 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300`} />
                  <span className="text-[10px] font-bold text-muted-foreground group-hover/skill:text-foreground transition-colors uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
