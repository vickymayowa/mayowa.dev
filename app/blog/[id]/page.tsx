import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import JsonLdScript from "@/components/json-ld"
import { getBlogById, getBlogs } from "@/lib/data"
import { createPageMetadata } from "@/lib/seo/metadata"
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo/json-ld"

type BlogPageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((blog) => ({ id: blog.id }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params
  const blog = await getBlogById(id)

  if (!blog) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested blog article could not be found.",
      path: `/blog/${id}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blog/${blog.id}`,
    keywords: [blog.category, "web development", "engineering blog"],
    ogImage: blog.image.startsWith("http") ? blog.image : undefined,
    ogType: "article",
    publishedTime: blog.date,
    modifiedTime: blog.updated_at,
    authors: [blog.author],
  })
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params
  const blog = await getBlogById(id)

  if (!blog) {
    notFound()
  }

  const imageSrc = blog.image || "/placeholder.svg"

  return (
    <article className="section-container min-h-screen max-w-4xl">
      <JsonLdScript
        data={[
          blogPostingSchema(blog),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: blog.title, path: `/blog/${blog.id}` },
          ]),
        ]}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Articles
      </Link>

      <header className="mb-10">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-lg mb-6">
          {blog.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{blog.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{blog.excerpt}</p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User size={16} className="text-primary" aria-hidden="true" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" aria-hidden="true" />
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-primary" aria-hidden="true" />
            <span>{blog.readtime}</span>
          </div>
        </div>
      </header>

      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-muted">
        <Image
          src={imageSrc}
          alt={blog.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-lg">
          {blog.content}
        </div>
      </div>
    </article>
  )
}
