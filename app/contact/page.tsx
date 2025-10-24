"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

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
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="section-container">
      <div className="mb-12">
        <h1 className="mb-4">Get In Touch</h1>
        <p className="text-foreground/70 max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back
          to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Contact Info Cards */}
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60">Email</p>
              <p className="font-semibold">techiedevmayowa@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60">Phone</p>
              <p className="font-semibold">+234 (916) 763-8933</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60">Location</p>
              <p className="font-semibold">Oyo State, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl">
        <div className="card">
          {submitted && (
            <div className="mb-6 p-4 bg-success/20 border border-success rounded-lg">
              <p className="text-success font-medium">Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-error/20 border border-error rounded-lg">
              <p className="text-error font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
