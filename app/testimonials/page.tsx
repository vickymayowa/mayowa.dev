import { Star, MessageSquare, Quote } from "lucide-react"
import Link from "next/link"

// ─── Static Data ─────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Product Manager at TechFlow",
        content: "Mayowa is an exceptional engineer. He took our vague requirements and turned them into a blazing fast, scalable application. His attention to detail in both UI/UX and backend architecture is rare to find.",
        rating: 3,
        delay: "delay-100",
    },
    {
        name: "David Adeleke",
        role: "Founder, StartupX",
        content: "Working with Favour was a game changer for us. He not only wrote clean and maintainable code but also advised us on architectural decisions that saved us weeks of technical debt. Highly recommended!",
        rating: 5,
        delay: "delay-200",
    },
    {
        name: "Emeka Okafor",
        role: "Engineering Lead, BuildRight",
        content: "One of the best full-stack developers I've worked with. Favour's ability to seamlessly switch between crafting fluid frontend animations and designing robust database schemas is truly impressive.",
        rating: 5,
        delay: "delay-300",
    }
]

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen pb-32 overflow-x-hidden pt-16">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.07]" />

                <div className="relative z-10 container px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <MessageSquare size={14} className="text-primary" />
                        Client Feedback
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        What People Are <span className="text-gradient italic">Saying</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        I take pride in delivering robust, high-performance software. Here&apos;s what past clients and colleagues have to say about our collaborations.
                    </p>
                </div>
            </section>

            {/* ── Testimonials Grid ────────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className={`card-premium group relative animate-in fade-in slide-in-from-bottom-4 duration-700 ${t.delay} flex flex-col h-full hover:scale-105 transition-all cursor-default overflow-hidden`}
                        >
                            <Quote size={24} className="text-primary/10 absolute top-4 right-4 pointer-events-none transform group-hover:scale-110 transition-transform" />

                            <div className="flex gap-1 mb-4 relative z-10">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-grow italic relative z-10">
                                &quot;{t.content}&quot;
                            </p>

                            <div className="mt-auto border-t border-border/50 pt-4 flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {t.name}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                                        {t.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
            <div className="container px-6 mx-auto max-w-5xl mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <div className="card-premium relative overflow-hidden text-center p-8 md:p-12 border border-primary/20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <Star size={24} className="text-primary fill-primary/30" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">Ready to work together?</h2>
                        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                            Let&apos;s turn your vision into a reality and add your next successful project to this list.
                        </p>
                        <Link href="/contact" className="btn-premium mt-6 group">
                            Start a Conversation
                            <MessageSquare size={16} className="ml-2 group-hover:animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
