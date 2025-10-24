"use client"

import { useState } from "react"
import { X, Phone, Mail, Copy, Check } from "lucide-react"

export default function HireMeModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const contactNumber = "+234 (123) 456-7890" // Replace with your actual number
    const contactEmail = "favour@example.com" // Replace with your actual email

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="btn-accent flex items-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all duration-200"
            >
                Hire Me
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-card border border-border rounded-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200 relative">
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-2 text-foreground">Let's Work Together!</h2>
                        <p className="text-foreground/70 mb-6">
                            I'm available for freelance projects and full-time opportunities. Let's build something amazing.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            {/* Phone */}
                            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-primary" />
                                    <div>
                                        <p className="text-sm text-foreground/60">Phone</p>
                                        <p className="font-semibold text-foreground">{contactNumber}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy(contactNumber)}
                                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                                    aria-label="Copy phone"
                                >
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                            </div>

                            {/* Email */}
                            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Mail size={20} className="text-primary" />
                                    <div>
                                        <p className="text-sm text-foreground/60">Email</p>
                                        <p className="font-semibold text-foreground">{contactEmail}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy(contactEmail)}
                                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                                    aria-label="Copy email"
                                >
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="space-y-3">
                            <p className="text-sm text-foreground/70 text-center">
                                Or reach out through the contact form for more details about your project.
                            </p>
                            <button onClick={() => setIsOpen(false)} className="w-full btn-primary">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
