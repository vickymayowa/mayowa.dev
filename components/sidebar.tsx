"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Briefcase,
  Brain,
  Mail,
  BookOpen,
  Menu,
  X,
  Sparkles,
  User,
  LayoutGrid,
  Github,
  Linkedin
} from "lucide-react"
import ThemeToggle from "./theme-toggle"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/experience", label: "Skills", icon: Brain },
  { href: "/blog", label: "Articles", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle (Floating) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[100] w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center transition-transform active:scale-90"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[80] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Compact Column Sidebar */}
      <aside
        className={`fixed md:relative h-[calc(100vh-2rem)] my-4 ml-4 w-20 md:w-24 bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] flex flex-col items-center py-10 gap-8 transition-all duration-500 z-[90] overflow-y-auto overflow-x-hidden scrollbar-none ${isOpen ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"
          }`}
      >
        {/* Brand/Top Icon */}
        <Link href="/" className="shrink-0 mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform">
            <Sparkles size={20} className="text-primary" />
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-6 w-full items-center">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-center shrink-0"
              >
                {/* Square Container */}
                <div
                  className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 ${isActive
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-muted/50 hover:bg-muted border border-transparent"
                    }`}
                >
                  <Icon
                    size={22}
                    className={`transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                  />
                </div>

                {/* Tooltip (Desktop Only) */}
                <div className="absolute left-[calc(100%+1rem)] px-3 py-1.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-[100]">
                  {item.label}
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-col gap-6 items-center shrink-0">
          <div className="flex flex-col gap-4 items-center">
            <Link href="https://github.com/vickymayowa" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </Link>
            <Link href="https://linkedin.com/in/favour-adebanjo" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </Link>
          </div>
          <div className="w-12 h-px bg-border/50" />
          <ThemeToggle />
          <Link href="/contact" className="group relative">
            <div className="w-14 h-14 rounded-[1.25rem] bg-foreground text-background flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              <User size={20} />
            </div>
          </Link>
        </div>
      </aside>
    </>
  )
}
