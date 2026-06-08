import { Mail, Sparkles } from "lucide-react"
import BlogGrid from "@/components/blog-grid"
import JsonLdScript from "@/components/json-ld"
import { getBlogs } from "@/lib/data"
import { breadcrumbSchema } from "@/lib/seo/json-ld"

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="section-container min-h-screen">
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <header className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} aria-hidden="true" />
          Knowledge Base
        </div>
        <h1 className="mb-6 leading-tight">Articles & Guides</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          I write about how I build websites, solve coding problems, and use new tools to make better web applications.
        </p>
      </header>

      <div className="mb-20">
        <BlogGrid blogs={blogs} />
      </div>

      <section
        className="mt-32 p-10 md:p-16 rounded-[2.5rem] bg-muted/30 border border-border/50 relative overflow-hidden"
        aria-labelledby="newsletter-heading"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="text-primary" size={28} aria-hidden="true" />
          </div>
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed italic">
            Get my latest articles about building websites and web applications sent to your email.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="flex-1 px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-medium"
            />
            <button type="submit" className="btn-premium px-8 py-4 shrink-0 rounded-2xl">
              Join the Tech Loop
            </button>
          </form>
          <p className="mt-6 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            No spam. Only high-signal technical content.
          </p>
        </div>
      </section>
    </div>
  )
}
