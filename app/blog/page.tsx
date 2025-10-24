import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Favour Mayowa",
  description: "Articles about web development, JavaScript, React, Next.js, and full-stack development.",
  openGraph: {
    title: "Blog | Favour Mayowa",
    description: "Articles about web development and full-stack technologies",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Full-Stack Applications with MERN",
    excerpt:
      "Learn how to architect and build scalable full-stack applications using MongoDB, Express, React, and Node.js. We'll cover best practices, performance optimization, and deployment strategies.",
    date: "2024-10-15",
    author: "Favour Mayowa",
    category: "Full-Stack",
    readTime: "8 min read",
    image: "/mern-stack-development.jpg",
  },
  {
    id: 2,
    title: "Next.js 15: New Features and Performance Improvements",
    excerpt:
      "Explore the latest features in Next.js 15 including improved server components, enhanced caching, and performance optimizations. Perfect for building modern web applications.",
    date: "2024-10-10",
    author: "Favour Mayowa",
    category: "Next.js",
    readTime: "6 min read",
    image: "/nextjs-15-features.jpg",
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large-Scale Projects",
    excerpt:
      "Master TypeScript with advanced patterns and best practices for building maintainable, type-safe applications. Includes real-world examples and common pitfalls to avoid.",
    date: "2024-10-05",
    author: "Favour Mayowa",
    category: "TypeScript",
    readTime: "10 min read",
    image: "/typescript-best-practices.jpg",
  },
  {
    id: 4,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover proven techniques to optimize React applications for better performance. Learn about memoization, code splitting, lazy loading, and more.",
    date: "2024-09-28",
    author: "Favour Mayowa",
    category: "React",
    readTime: "7 min read",
    image: "/react-performance-optimization.jpg",
  },
  {
    id: 5,
    title: "Deploying Applications to AWS: A Complete Guide",
    excerpt:
      "Step-by-step guide to deploying your applications on AWS. Covers EC2, S3, RDS, and best practices for production deployments.",
    date: "2024-09-20",
    author: "Favour Mayowa",
    category: "DevOps",
    readTime: "12 min read",
    image: "/aws-deployment-guide.jpg",
  },
  {
    id: 6,
    title: "Database Design Patterns for Modern Applications",
    excerpt:
      "Learn essential database design patterns including normalization, indexing, and optimization strategies for both SQL and NoSQL databases.",
    date: "2024-09-15",
    author: "Favour Mayowa",
    category: "Database",
    readTime: "9 min read",
    image: "/database-design-patterns.jpg",
  },
]

export default function BlogPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
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
