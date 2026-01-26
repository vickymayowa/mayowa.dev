"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, Sparkles, Mail } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Pagination from "@/components/pagination"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 4

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog")
        const data = await response.json()
        setBlogs(data || [])
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filteredBlogs = blogs
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage)

  return (
    <div className="section-container min-h-screen">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} />
          Knowledge Base
        </div>
        <h1 className="mb-6 leading-tight">Articles & Guides</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          I write about how I build websites, solve coding problems, and use new tools to make better web applications.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="mb-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[16/9] w-full rounded-2xl" />
                <Skeleton className="h-8 w-3/4 rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {paginatedBlogs.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-card border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider rounded-lg border border-border/50">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-primary" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-8 line-clamp-2 leading-relaxed italic">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <User size={12} className="text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all duration-300"
                      >
                        Read Article
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Component */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="mt-32 p-10 md:p-16 rounded-[2.5rem] bg-muted/30 border border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Stay Updated</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed italic">
            Get my latest articles about building websites and web applications sent to your email.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="vicky@example.com"
              className="flex-1 px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-medium"
            />
            <button
              type="submit"
              className="btn-premium px-8 py-4 shrink-0 rounded-2xl"
            >
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
