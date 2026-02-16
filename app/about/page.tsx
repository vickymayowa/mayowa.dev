"use client"

import { Code2, Globe, Cpu, Quote, Briefcase } from "lucide-react"

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

                        {/* Quote Section */}
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

                        {/* Experience Section */}
                        <div className="card-premium">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                <Briefcase className="text-primary" />
                                The Journey
                            </h2>

                            <div className="relative border-l-2 border-primary/20 ml-3 space-y-12 pl-8 py-2">
                                {/* Experience Item 1 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-primary transition-all duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Full-Stack Engineer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">2023 - Present</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">MoonJoin Technologies.</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            Engineered the vendor cart management system, enabling real-time edits, automated refunds, and item substitutions. Integrated the 9PSB Payment Gateway to generate dedicated virtual accounts for user wallet funding. Built secure withdrawal workflows allowing vendors and delivery partners to transfer earnings directly to verified bank accounts.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 2 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Frontend Developer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">Feb 2025 - Apr 2025</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">Whatspodcasting · Plluggg</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I worked on the frontend of their website, making it fast and easy to use.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 3 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Frontend Engineer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">Feb 2025 - Mar 2025</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">The New Story Foundation</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I built an NGO website from scratch. I created a dynamic site to show their humanitarian work to the world.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 4 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Frontend Developer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">May 2024 - Feb 2025</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">Cargomax Services Ltd</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I built the user interface for managing orders and products using Next.js. I made the site responsive and easy for customers to use.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 5 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Frontend Developer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">May 2024 - Dec 2024</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">Tripflex</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I built a website for booking car tours. I also made an admin dashboard for managing drivers, payments, and settings.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 6 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Full Stack Developer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">SEPT 2022 - AUG 2024</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">SQI COLLEGE OF ICT</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I studied full-stack development and learned how to use many different tools like React, Node.js, and SQL. I practiced building both the front and back parts of websites.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 7 */}
                                <div className="relative group">
                                    <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-background bg-muted-foreground/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-x-2">
                                            <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Frontend Developer</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">Jun 2023 - Oct 2023</span>
                                        </div>
                                        <div className="text-base font-semibold text-muted-foreground">Alusoft Technologies Ltd</div>
                                        <p className="text-sm leading-relaxed text-muted-foreground/80 mt-2">
                                            I taught other people how to build websites. I explained HTML, CSS, and JavaScript and helped them with their first projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
