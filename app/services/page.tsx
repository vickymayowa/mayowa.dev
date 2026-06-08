import Link from "next/link"
import Services from "@/components/services"
import JsonLdScript from "@/components/json-ld"
import { breadcrumbSchema, organizationSchema } from "@/lib/seo/json-ld"

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <JsonLdScript
                data={[
                    organizationSchema(),
                    breadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Services", path: "/services" },
                    ]),
                ]}
            />
            <Services asPage />
            <div className="section-container">
                <div className="p-8 rounded-[3rem] bg-primary text-primary-foreground text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Have a specific project?</h2>
                        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto italic">
                            I&apos;m currently accepting new projects and architectural consultations. Let&apos;s build something exceptional together.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
