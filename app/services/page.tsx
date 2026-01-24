"use client"

import Services from "@/components/services"
import { Sparkles } from "lucide-react"

export default function ServicesPage() {
    return (
        <div className="section-container min-h-screen">
            <div className="mb-20">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    <Sparkles size={12} />
                    Solutions
                </div>
                <h1 className="mb-6 leading-tight">Expert Services</h1>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    Specialized technical solutions designed to scale high-performance digital products and optimize architectural efficiency.
                </p>
            </div>

            <Services />

            {/* Additional CTA */}
            <div className="mt-32 p-12 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Have a specific project?</h2>
                    <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto italic">
                        I'm currently accepting new projects and architectural consultations. Let's build something exceptional together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
                    >
                        Start a Conversation
                    </a>
                </div>
            </div>
        </div>
    )
}
