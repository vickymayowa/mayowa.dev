import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import Sidebar from "@/components/sidebar"
import LoadingScreen from "@/components/loading-screen"
import { ThemeProvider } from "@/app/providers"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Favour Mayowa | Full-Stack Developer",
  description:
    "Full-stack developer with 3+ years of experience in JavaScript, TypeScript, React, Vue, Next.js, Node.js, and more. Specializing in MERN stack and scalable web applications.",
  keywords: ["developer", "portfolio", "full-stack", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Favour Mayowa" }],
  openGraph: {
    title: "Favour Mayowa | Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience building scalable web applications",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Mayowa | Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <ThemeProvider>
          <LoadingScreen />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
