import Link from "next/link"
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Calendar,
    Coffee,
    Zap,
    Code2,
    Globe,
    Layers,
    Server,
    Smartphone,
    Star,
    ExternalLink,
    Briefcase,
} from "lucide-react"
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiTailwindcss,
    SiVuedotjs,
    SiDocker,
    SiLaravel,
    SiGit,
    SiAmazonwebservices,
} from "react-icons/si"
import ExperiencePanel from "./experience-panel"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Experience {
    id: string
    role: string
    company: string
    date: string
    current?: boolean
    description: string
    skills: string[]
    location: string
}

// ─── Data fetcher ─────────────────────────────────────────────────────────────
async function getExperience(): Promise<Experience[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/experience`, {
            cache: "no-store",
        })
        if (!res.ok) return []
        const json = await res.json()
        return json.data ?? []
    } catch {
        return []
    }
}

// ─── Static display data ───────────────────────────────────────────────────────
const techStack = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "React", icon: SiReact, color: "text-sky-400", bg: "bg-sky-400/10" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", bg: "bg-foreground/10" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500", bg: "bg-red-500/10" },
    { name: "Git", icon: SiGit, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-yellow-500", bg: "bg-yellow-500/10" },
]

const values = [
    { icon: Code2, title: "Clean Code Advocate", desc: "Every line matters. I write code that's readable, maintainable, and built to scale." },
    { icon: Zap, title: "Performance Obsessed", desc: "Speed is a feature. I relentlessly optimize for load time, rendering, and user experience." },
    { icon: Layers, title: "Fullstack Mindset", desc: "From database schema to pixel-perfect UI — I own the entire stack." },
    { icon: Globe, title: "Product Thinker", desc: "I don't just build features. I think about the user, the business, and the impact." },
    { icon: Smartphone, title: "Mobile-First Always", desc: "Every interface I build is crafted for all screen sizes from day one." },
    { icon: Server, title: "Systems & Scale", desc: "Designing for growth — architecture that holds up under real-world traffic and complexity." },
]

const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "10+", label: "Companies & Clients" },
    { value: "12+", label: "Technologies" },
]

const skills = [
    { label: "Frontend Development", pct: 95, color: "bg-primary" },
    { label: "Backend & APIs", pct: 85, color: "bg-indigo-500" },
    { label: "Database Design", pct: 80, color: "bg-emerald-500" },
    { label: "Mobile-First / Responsive", pct: 92, color: "bg-sky-400" },
    { label: "DevOps & Cloud", pct: 65, color: "bg-orange-400" },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function AboutPage() {
    const experiences = await getExperience()

    return (
        <div className="min-h-screen pb-32 overflow-x-hidden">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.07]" />

                <div className="relative z-10 container px-6 text-center max-w-4xl mx-auto pt-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        Full-Stack Engineer · Available for Opportunities
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Favour{" "}
                        <span className="text-gradient italic">Mayowa</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        I build fast, reliable, and beautifully crafted web products — from concept to deployment.
                        3+ years turning complex ideas into clean, working software.
                    </p>

                    {/* Meta pills */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        {[
                            { icon: MapPin, text: "Nigeria" },
                            { icon: Calendar, text: "3+ Years Exp." },
                            { icon: Coffee, text: "Open to Relocation" },
                        ].map(({ icon: Icon, text }) => (
                            <span
                                key={text}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground font-medium"
                            >
                                <Icon size={13} className="text-primary" />
                                {text}
                            </span>
                        ))}
                    </div>

                    {/* Social CTAs */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                        <Link href="https://github.com/vickymayowa" target="_blank" className="btn-outline-premium text-sm py-2 px-4">
                            <Github size={15} /> GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/favour-adebanjo/" target="_blank" className="btn-outline-premium text-sm py-2 px-4">
                            <Linkedin size={15} /> LinkedIn
                        </Link>
                        <Link href="mailto:techiedevmayowa@gmail.com" className="btn-premium text-sm py-2 px-4">
                            <Mail size={15} /> Email Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ────────────────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="card-premium text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-1 font-heading">
                                {stat.value}
                            </div>
                            <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Bio + Values ─────────────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-8 space-y-6">

                {/* Bio Card */}
                <div className="card-premium relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Star size={16} className="text-primary fill-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                I'm Favour Mayowa — a Full-Stack Engineer with a builder's mindset.
                            </h2>
                            <div className="space-y-3 text-muted-foreground leading-relaxed">
                                <p>
                                    My journey started with curiosity and a laptop. Over 3+ years, I've shipped everything from
                                    fintech platforms and NGO websites to booking systems and real-time dashboards — used by people across the globe.
                                </p>
                                <p>
                                    I specialize in the modern JavaScript ecosystem:{" "}
                                    <span className="text-foreground font-semibold">React, Next.js, Node.js, TypeScript</span> — and I'm
                                    deeply comfortable on the backend too, working with{" "}
                                    <span className="text-foreground font-semibold">Laravel, PostgreSQL, and MongoDB</span>.
                                </p>
                                <p>
                                    I don't just code —{" "}
                                    <span className="text-foreground font-semibold">I architect experiences</span>. I care about
                                    performance, scalability, and making things that work beautifully and make a real impact.
                                </p>
                            </div>
                        </div>

                        {/* Decorative quote */}
                        <div className="hidden md:flex flex-col items-center justify-center min-w-[180px] text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
                            <span className="text-5xl text-primary/20 font-serif leading-none mb-2">&ldquo;</span>
                            <p className="text-sm italic text-foreground/70 leading-relaxed">
                                If it needs to be built, I build it — with precision and passion.
                            </p>
                            <span className="text-5xl text-primary/20 font-serif leading-none mt-2 rotate-180">&rdquo;</span>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {values.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="card-premium group flex gap-4 items-start">
                            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                                <Icon
                                    size={18}
                                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Skills + Tech Stack ───────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-8">
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Skill Bars */}
                    <div className="card-premium space-y-5">
                        <div className="flex items-center gap-2 mb-2">
                            <Layers size={16} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Proficiency</span>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Core Skill Areas</h2>
                        {skills.map((s) => (
                            <div key={s.label} className="space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-foreground">{s.label}</span>
                                    <span className="text-xs font-bold text-primary">{s.pct}%</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${s.color}`}
                                        style={{ width: `${s.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Tiles */}
                    <div className="card-premium">
                        <div className="flex items-center gap-2 mb-2">
                            <Code2 size={16} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Tech Stack</span>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Tools I Work With</h2>
                        <div className="grid grid-cols-3 gap-2">
                            {techStack.map(({ name, icon: Icon, color, bg }) => (
                                <div
                                    key={name}
                                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl ${bg} border border-border/50 hover:border-primary/30 hover:scale-105 transition-all duration-200 cursor-default`}
                                >
                                    <Icon className={`text-2xl ${color}`} />
                                    <span className="text-[10px] font-semibold text-muted-foreground text-center leading-tight">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Experience Timeline (from API) ────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-8">
                <div className="card-premium">
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Career Journey</span>
                    </div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Experience Timeline</h2>
                        <span className="text-xs text-muted-foreground font-medium">
                            {experiences.length} role{experiences.length !== 1 ? "s" : ""}
                        </span>
                    </div>

                    <ExperiencePanel experiences={experiences} />
                </div>
            </div>

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-8">
                <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-12 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[80px] pointer-events-none" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            Open to Work
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s Build Something Great</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                            I&apos;m actively looking for full-time roles, contract work, and exciting collaborations.
                            If you need a reliable engineer who cares about quality — let&apos;s talk.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="btn-premium group">
                                Get in Touch
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/favour-adebanjo/"
                                target="_blank"
                                className="btn-outline-premium"
                            >
                                <Linkedin size={15} />
                                LinkedIn Profile
                                <ExternalLink size={13} className="ml-1 opacity-60" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
