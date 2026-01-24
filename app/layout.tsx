import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import Sidebar from "@/components/sidebar"
import { SpeedInsights } from "@vercel/speed-insights/next"
import LoadingScreen from "@/components/loading-screen"
import { ThemeProvider } from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Favour Mayowa | Full-Stack Engineer",
  description:
    "Full-Stack developer with 3+ years of experience in JavaScript, TypeScript, React, Vue, Next.js, Node.js, and more. Specializing in high-performance web applications and scalable architecture.",
  keywords: ["developer", "frontend developer", "backend developer", "portfolio", "full-stack engineer", "React expert", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Favour Mayowa" }],
  openGraph: {
    title: "Favour Mayowa | Full-Stack Engineer",
    description: "Building high-performance, scalable web applications with modern technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Mayowa | Full-Stack Engineer",
    description: "Building high-performance, scalable web applications.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        <ThemeProvider>
          <LoadingScreen />
          <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative scroll-smooth">
              {children}
            </main>
            <Toaster />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
