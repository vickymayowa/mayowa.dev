"use client"

import { Code2, Globe, Cpu, Quote } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
                <div className="container relative z-10 px-6 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Crafting digital experiences with code and creativity.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container px-6 mx-auto -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Bio Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="card-premium bg-card/50 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Code2 className="text-primary" />
                                The Story So Far
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                                <p>
                                    I'm Favour Mayowa, a Full-Stack Engineer with over 3 years of experience building high-performance web applications. My journey began with a curiosity for how things work on the web, which quickly evolved into a passion for creating scalable, user-centric solutions.
                                </p>
                                <p>
                                    I specialize in the modern JavaScript ecosystem, leveraging tools like React, Next.js, and Node.js to build robust applications. Whether it's a complex dashboard or a pixel-perfect landing page, I bring attention to detail and a commitment to quality code.
                                </p>
                                <p>
                                    Beyond code, I'm constantly learning and exploring new technologies to stay ahead of the curve.
                                </p>
                            </div>
                        </div>

                        {/* Quote Section (Placeholder) */}
                        <div className="card-premium border-primary/20 bg-primary/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={120} />
                            </div>
                            <blockquote className="relative z-10 p-8 text-center">
                                <p className="text-2xl md:text-3xl font-heading font-medium italic leading-relaxed text-foreground">
                                    "Je pense, donc je suis"
                                </p>
                                <footer className="mt-6 text-primary font-bold tracking-wider uppercase text-sm">
                                    — René Descartes
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    {/* Stats / Skills Column */}
                    <div className="space-y-6">
                        <div className="card-premium">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Cpu className="text-primary" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["React.Js", "Next.Js", "TypeScript", "Node.Js", "Tailwind CSS", "PostgreSQL", "MongoDb", "Docker", "Laravel", "Docker", "Vuejs", "AWS"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-border">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="card-premium">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="text-primary" />
                                Connect
                            </h3>
                            <div className="space-y-4">
                                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available for new projects
                                </a>
                                <p className="text-sm text-muted-foreground">
                                    Let's build something amazing together.
                                </p>
                                <button className="w-full btn-premium">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
