import Link from "next/link"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { SiX } from "react-icons/si"
import { siteConfig } from "@/lib/seo/site"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="section-container !py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              aria-label={`${siteConfig.name} — Home`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                <Sparkles
                  size={17}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>
              <span className="font-heading text-sm font-bold tracking-tight">
                {siteConfig.shortTitle}
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {siteConfig.tagline}. Specializing in TypeScript, React, Vue,
              Node.js, PostgreSQL, MongoDB, Supabase, Docker, Vercel, and VPS
              hosting setup.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigation
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Connect
            </h2>
            <nav aria-label="Social links">
              <ul className="space-y-2">
                <li>
                  <Link
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} aria-hidden="true" /> GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={16} aria-hidden="true" /> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiX size={14} aria-hidden="true" /> X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={16} aria-hidden="true" /> {siteConfig.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={16} aria-hidden="true" /> {siteConfig.supportEmail}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Full-Stack Software Developer &amp; Web Development Specialist</p>
        </div>
      </div>
    </footer>
  );
}
