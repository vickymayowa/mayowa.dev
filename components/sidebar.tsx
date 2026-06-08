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
  LayoutGrid,
  User,
  MessageSquare
} from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/experience", label: "Skills", icon: Brain },
  { href: "/blog", label: "Articles", icon: BookOpen },
  { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[100] w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center transition-transform active:scale-90"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[80] md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed md:relative h-[calc(100vh-2rem)] my-4 ml-4 w-20 md:w-24 bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] flex flex-col items-center py-10 gap-8 transition-all duration-500 z-[90] overflow-y-auto overflow-x-hidden scrollbar-none ${isOpen ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"
          }`}
      >
        <Link href="/" className="shrink-0 mb-2" aria-label="Favour Mayowa — Home">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform">
            <Sparkles size={20} className="text-primary" aria-hidden="true" />
          </div>
        </Link>

        <nav id="main-navigation" className="flex flex-col gap-6 w-full items-center" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-center shrink-0"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
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
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute left-[calc(100%+1rem)] px-3 py-1.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-[100]">
                  {item.label}
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
                </div>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
