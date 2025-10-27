"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { SkeletonCard } from "@/components/skeleton"

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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs")
        const data = await response.json()
        setBlogs(data)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-container pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-slate-400">
            Insights, tutorials, and thoughts on web development, full-stack technologies, and software engineering best
            practices.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-container pb-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group/link"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="section-container py-16 border-t border-slate-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-slate-400 mb-6">
            Get the latest articles and insights delivered to your inbox every week.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
