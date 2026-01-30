"use client"

import { Layout, Server, Layers, Zap, Palette, Code, Smartphone, Globe } from "lucide-react"
import { Sparkles } from "lucide-react"

const services = [
    {
        title: "Frontend Development",
        description: "I build the part of the website you see and interact with. I make sure it works well on phones and computers.",
        icon: Layout,
        tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Backend Engineering",
        description: "I build the hidden part of websites that handles data and keep things running smoothly and safely.",
        icon: Server,
        tags: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Full-Stack Development",
        description: "I build the whole website from start to finish, making sure everything works together perfectly.",
        icon: Layers,
        tags: ["MERN", "T3 Stack", "Serverless"],
    },
    {
        title: "Performance & SEO",
        description: "I make websites load faster and help them show up better on search engines like Google.",
        icon: Zap,
        tags: ["SEO", "Web Vitals", "Caching", "Optimization"],
    },
    {
        title: "Website Maintenance",
        description: "I keep your website updated, secure, and working perfectly after it goes live.",
        icon: Palette,
        tags: ["Updates", "Security", "Regular Maintenance"],
    },
    {
        title: "Cloud & Deployment",
        description: "I put your website online so anyone in the world can visit it anytime.",
        icon: Globe,
        tags: ["AWS", "Vercel", "Docker", "CI/CD"],
    },
]

export default function Services() {
    return (
        <section id="services" className="section-container border-t border-border/50 !pt-8 md:!pt-12">
            <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                            <Sparkles size={12} />
                            How I can help
                        </div>
                        <h2 className="mb-6 leading-tight">My Main <br /><span className="text-primary italic"> Services</span></h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I build websites and apps that work great and help your business or startup reach more people.
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
