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
  SiDocker,
  SiVercel,
} from "react-icons/si"

const techCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Angular", icon: SiAngular, color: "text-red-500" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-green-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },

      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-500" },

      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
  {
    title: "CI/CD",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-500" },

      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build scalable, performant applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                    >
                      <IconComponent className={`text-2xl ${skill.color}`} />
                      <span className="text-sm font-medium text-center text-foreground/80">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
