import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="section-container" aria-labelledby="cta-heading">
      <div className="relative overflow-hidden rounded-[3rem] bg-primary text-primary-foreground p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Ready to build your next web project?
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-10 leading-relaxed">
            Whether you need a React developer, full-stack engineer, UI/UX design, API integration, or VPS hosting setup — let&apos;s ship something exceptional together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10 group"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
