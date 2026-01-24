"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Brain, Mail, BookOpen, Menu, X, Command } from "lucide-react"
import ThemeToggle from "./theme-toggle"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/experience", label: "Experience", icon: Brain },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-3 glass-effect rounded-full shadow-lg transition-all duration-300 active:scale-95"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-72 h-screen bg-card/50 backdrop-blur-xl border-r border-border/50 flex flex-col transition-all duration-500 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Logo/Brand */}
        <div className="p-8 mb-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
              <Command size={22} className="text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Mayowa<span className="text-primary">.</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">Portfolio 2024</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1.5">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group relative ${isActive
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {isActive && (
                  <div className="absolute left-0 w-1 h-5 bg-primary rounded-r-full" />
                )}
                <Icon
                  size={18}
                  className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 mt-auto">
          <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1">Theme</p>
              <p className="text-xs font-semibold text-foreground">Select Mode</p>
            </div>
            <ThemeToggle />
          </div>
          <div className="mt-6 flex items-center justify-between text-[10px] text-muted-foreground font-medium px-2">
            <span>© 2024 FAVOUR</span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span>BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
