"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles, Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/providers"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function TopNav() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    setMounted(true)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ease-out",
          isScrolled ? "pt-2" : "pt-4 md:pt-5"
        )}
      >
        <div
          className={cn(
            "nav-glass relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-full transition-all duration-500 ease-out",
            isScrolled ? "h-[52px] px-3 sm:px-4" : "h-[60px] px-3 sm:px-5"
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/[0.02] dark:to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20"
            aria-hidden="true"
          />

          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Favour Mayowa — Home"
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-all duration-500",
                isScrolled ? "h-8 w-8" : "h-9 w-9"
              )}
            >
              <Sparkles
                size={isScrolled ? 15 : 17}
                className="text-primary"
                aria-hidden="true"
              />
            </div>
            <span
              className={cn(
                "hidden font-heading text-sm font-bold tracking-tight text-foreground transition-all duration-500 sm:inline",
                isScrolled ? "opacity-90" : "opacity-100"
              )}
            >
              Favour<span className="text-primary">.</span>
            </span>
          </Link>

          <nav
            className="relative z-10 hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight transition-colors duration-300",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <span
                      className="absolute inset-0 rounded-full border border-primary/20 bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {!active && (
                    <span
                      className="absolute inset-0 scale-90 rounded-full bg-foreground/[0.04] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className={cn(
                  "hidden items-center justify-center rounded-full border border-border/50 bg-foreground/[0.04] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.06] hover:text-foreground active:scale-95 sm:flex",
                  isScrolled ? "h-8 w-8" : "h-9 w-9"
                )}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={15} className="text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon size={15} className="text-primary" aria-hidden="true" />
                )}
              </button>
            )}

            <Link
              href="/contact"
              className={cn(
                "hidden items-center rounded-full bg-primary px-4 text-[13px] font-semibold text-primary-foreground shadow-[0_4px_14px_-2px] shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40 active:scale-[0.98] md:inline-flex",
                isScrolled ? "h-8" : "h-9"
              )}
            >
              Hire Me
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex items-center justify-center rounded-full border border-border/50 bg-foreground/[0.04] text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.06] active:scale-95 lg:hidden",
                isScrolled ? "h-8 w-8" : "h-9 w-9"
              )}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={cn(
          "nav-glass-mobile fixed left-4 right-4 z-40 overflow-hidden rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden",
          isScrolled ? "top-[68px]" : "top-[80px]",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent dark:from-white/[0.06]"
          aria-hidden="true"
        />
        <nav className="relative p-3" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const active = isActive(item.href)
              return (
                <li
                  key={item.href}
                  className={cn(
                    "transition-all duration-500",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  )}
                  style={{ transitionDelay: isOpen ? `${index * 40 + 60}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300",
                      active
                        ? "border border-primary/20 bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-foreground/[0.04] hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div
            className={cn(
              "mt-2 flex items-center gap-2 border-t border-border/40 pt-3 transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? `${navItems.length * 40 + 80}ms` : "0ms" }}
          >
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-border/50 bg-foreground/[0.04] text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={16} className="text-amber-400" aria-hidden="true" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={16} className="text-primary" aria-hidden="true" />
                    Dark Mode
                  </>
                )}
              </button>
            )}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex h-11 flex-1 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_14px_-2px] shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Hire Me
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "pointer-events-none transition-all duration-500",
          isScrolled ? "h-[68px]" : "h-[80px] md:h-[84px]"
        )}
        aria-hidden="true"
      />
    </>
  )
}
