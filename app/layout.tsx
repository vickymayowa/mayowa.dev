import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import TopNav from "@/components/top-nav"
import ClientEnhancements from "@/components/client-enhancements"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/app/providers"
import JsonLdScript from "@/components/json-ld"
import { rootMetadata } from "@/lib/seo/metadata"
import { organizationSchema, personSchema, websiteSchema } from "@/lib/seo/json-ld"
import { siteConfig } from "@/lib/seo/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor.dark },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        <JsonLdScript data={[personSchema(), websiteSchema(), organizationSchema()]} />
        <ThemeProvider>
          <ClientEnhancements />
          <div className="min-h-screen bg-background">
            <TopNav />
            <main id="main-content" className="relative scroll-smooth">
              {children}
            </main>
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
