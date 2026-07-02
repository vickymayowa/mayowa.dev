import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiShadcnui,
} from "react-icons/si"
import { Layout, Server, Database, Cloud } from "lucide-react"

const techCategories = [
  {
    title: "Frontend",
    icon: Layout,
    description: "React, Vue, UI/UX, and TailwindCSS for fast, accessible interfaces.",
    skills: [
      { name: "React", icon: SiReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "ShadCN UI", icon: SiShadcnui, color: "text-foreground" },
      { name: "UI/UX", icon: Layout, color: "text-primary" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Node.js, Express, and API development for scalable server-side systems.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
      { name: "Express.js", icon: SiExpress, color: "text-muted-foreground" },
      { name: "REST APIs", icon: Server, color: "text-primary" },
      { name: "Webhooks", icon: Server, color: "text-violet-500" },
      { name: "TypeScript", icon: SiNextdotjs, color: "text-blue-500" },
      { name: "Auth", icon: Server, color: "text-amber-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "PostgreSQL, MongoDB, and Supabase for reliable data architecture.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Redis", icon: Database, color: "text-rose-500" },
      { name: "Prisma", icon: Database, color: "text-sky-400" },
      { name: "SQL", icon: Database, color: "text-blue-600" },
    ],
  },
  {
    title: "DevOps & Hosting",
    icon: Cloud,
    description: "VPS hosting, Docker, Vercel, and web deployment for production-ready systems.",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
      { name: "VPS Hosting", icon: Cloud, color: "text-primary" },
      { name: "Nginx", icon: Cloud, color: "text-emerald-500" },
      { name: "CI/CD", icon: Cloud, color: "text-violet-500" },
      { name: "Linux", icon: Cloud, color: "text-yellow-600" },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="section-container border-t border-border/50" aria-labelledby="skills-section-heading">
      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="skills-section-heading" className="mb-6 leading-tight">
              Full-Stack Skills &amp; <span className="text-primary italic">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From frontend UI/UX to backend APIs, databases, and VPS hosting — I build complete web development solutions that scale.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techCategories.map((category) => (
          <article
            key={category.title}
            className="group flex flex-col p-8 rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" aria-hidden="true" />

            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 relative z-10">
              <category.icon className="text-primary" size={28} aria-hidden="true" />
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
                  <skill.icon className={`text-xl ${skill.color} opacity-80 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300`} aria-hidden="true" />
                  <span className="text-[10px] font-bold text-muted-foreground group-hover/skill:text-foreground transition-colors uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
