import Link from "next/link"
import { Sparkles } from "lucide-react"
import { services } from "@/lib/services"

type ServicesProps = {
  asPage?: boolean
  limit?: number
}

export default function Services({ asPage = false, limit }: ServicesProps) {
  const Heading = asPage ? "h1" : "h2"
  const headingId = asPage ? "services-page-heading" : "services-section-heading"
  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <section
      id="services"
      className={`section-container border-t border-border/50 ${asPage ? "min-h-screen !pt-16" : "!pt-8 md:!pt-12"}`}
      aria-labelledby={headingId}
    >
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
              <Sparkles size={12} aria-hidden="true" />
              Web development services
            </div>
            <Heading id={headingId} className="mb-6 leading-tight">
              {asPage ? (
                <>
                  Professional Web Development &amp; <span className="text-primary italic">Hosting Services</span>
                </>
              ) : (
                <>
                  Web Development &amp; <span className="text-primary italic">Hosting Services</span>
                </>
              )}
            </Heading>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {asPage
                ? "Full-stack web development, UI/UX design, API integration, SaaS builds, web hosting setup, and VPS deployment — delivered with TypeScript, React, Vue, Node.js, and production-grade infrastructure."
                : "From React and Vue frontends to Node.js APIs, SaaS dashboards, and VPS hosting setup — I deliver end-to-end web development services."}
            </p>
          </div>
          {!asPage && (
            <Link href="/services" className="btn-outline-premium shrink-0 self-start md:self-auto">
              View All Services
            </Link>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service) => (
          <article
            key={service.slug}
            id={service.slug}
            className="group flex flex-col p-8 rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 scroll-mt-28"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
              <service.icon className="text-primary" size={28} aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="mb-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Benefits</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Tools used</h4>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-lg border border-border/50 group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
