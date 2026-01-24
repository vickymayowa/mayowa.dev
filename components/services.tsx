"use client"

import { Layout, Server, Layers, Zap, Palette, Code, Smartphone, Globe } from "lucide-react"
import { Sparkles } from "lucide-react"

const services = [
    {
        title: "Frontend Development",
        description: "Building highly interactive, responsive, and performance-driven user interfaces using modern frameworks like React and Next.js.",
        icon: Layout,
        tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Backend Engineering",
        description: "Architecting scalable server-side systems, secure APIs, and efficient database schemas for high-traffic applications.",
        icon: Server,
        tags: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Full-Stack Development",
        description: "End-to-end product development from initial architecture to final deployment, ensuring a cohesive and seamless user experience.",
        icon: Layers,
        tags: ["MERN", "T3 Stack", "Serverless"],
    },
    {
        title: "Performance Optimization",
        description: "Deep audits and technical optimizations to improve Core Web Vitals, reduce load times, and maximize conversion rates.",
        icon: Zap,
        tags: ["SEO", "Web Vitals", "Caching", "Optimization"],
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive, minimalist, and high-impact digital designs that prioritize user experience and brand identity.",
        icon: Palette,
        tags: ["Figma", "Design Systems", "Prototyping"],
    },
    {
        title: "Cloud & Deployment",
        description: "Managing robust cloud infrastructure, CI/CD pipelines, and secure automated deployments for modern web apps.",
        icon: Globe,
        tags: ["AWS", "Vercel", "Docker", "CI/CD"],
    },
]

export default function Services() {
    return (
        <section className="section-container border-t border-border/50">
            <div className="mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                            <Sparkles size={12} />
                            Core Expertise
                        </div>
                        <h2 className="mb-6 leading-tight">Services I <br /><span className="text-primary italic">Deliver with Excellence</span></h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I provide specialized technical services tailored for businesses and startups that demand high-performance digital products and scalable architecture.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        className="group flex flex-col p-8 rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                        style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                            <service.icon className="text-primary" size={28} />
                        </div>

                        <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {service.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                            {service.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-lg border border-border/50 group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
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
      `}</style>
        </section>
    )
}
