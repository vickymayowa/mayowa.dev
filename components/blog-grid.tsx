"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Pagination from "@/components/pagination"
import type { Blog } from "@/lib/db"

type BlogGridProps = {
  blogs: Blog[]
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 4
  const totalPages = Math.ceil(blogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage)

  if (blogs.length === 0) {
    return (
      <div className="text-center py-32 bg-card/30 rounded-3xl border border-dashed border-border/50">
        <p className="text-muted-foreground font-medium">No articles published yet.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {paginatedBlogs.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col bg-card border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
          >
            <Link href={`/blog/${post.id}`} className="relative aspect-[16/9] overflow-hidden bg-muted block">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider rounded-lg border border-border/50">
                  {post.category}
                </span>
              </div>
            </Link>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary" aria-hidden="true" />
                  {post.readtime}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>

              <p className="text-muted-foreground text-sm mb-8 line-clamp-2 leading-relaxed italic">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={12} className="text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all duration-300"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-20 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            ariaLabel="Blog articles pagination"
          />
        </div>
      )}
    </>
  )
}
