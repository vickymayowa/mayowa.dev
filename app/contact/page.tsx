"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, AlertCircle, Github, Linkedin } from "lucide-react"
import { SiX } from "react-icons/si"
import JsonLdScript from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo/json-ld"
import { siteConfig } from "@/lib/seo/site"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Something went wrong. Please try reaching out directly via email.")
      }
    } catch {
      setError("An unexpected error occurred. Please check your connection.")
    } finally {
      setIsLoading(false)
    }
  }

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (916) 763-8933",
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: siteConfig.social.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
    { icon: SiX, label: "X (Twitter)", href: siteConfig.social.twitter, isReactIcon: true },
  ]

  return (
    <div className="section-container min-h-screen">
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <header className="mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          <Sparkles size={12} aria-hidden="true" />
          Collaborate
        </div>
        <h1 className="mb-6 leading-tight">
          Let&apos;s build your <span className="text-primary italic">web project</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Need a full-stack developer for web development, UI/UX design, API integration, SaaS builds, or VPS hosting setup? Send a message and I&apos;ll respond within 24 hours.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Direct Channels</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preferred contact method is email. You can also connect via GitHub or LinkedIn for project discussions.
            </p>
          </div>

          <div className="space-y-4">
            {contactOptions.map((option) => (
              <a
                href={option.href}
                key={option.label}
                className="group flex items-center gap-5 p-6 bg-card border border-border/50 rounded-3xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                aria-label={`${option.label}: ${option.value}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <option.icon className="text-primary" size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">{option.label}</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{option.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4">Social Profiles</h2>
            <nav aria-label="Social media links" className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <social.icon size={16} aria-hidden="true" />
                  {social.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-8 rounded-[2rem] bg-muted/30 border border-border/50">
            <h3 className="text-sm font-bold mb-4">Availability</h3>
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </div>
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Open for web development &amp; hosting projects</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" aria-hidden="true" />

            {submitted ? (
              <div className="py-20 text-center animate-in fade-in scale-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} className="text-emerald-500" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-premium mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-8 tracking-tight">Send a Message</h2>

                {error && (
                  <div className="mb-8 p-4 bg-destructive/5 border border-destructive/20 rounded-2xl flex items-center gap-3 text-destructive animate-in slide-in-from-top-2" role="alert">
                    <AlertCircle size={18} aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-wider">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full px-6 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:outline-none focus:border-primary/40 focus:bg-background transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full px-6 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:outline-none focus:border-primary/40 focus:bg-background transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:outline-none focus:border-primary/40 focus:bg-background transition-all font-medium resize-none"
                      placeholder="Tell me about your web development, UI/UX, or hosting project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-premium py-5 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
