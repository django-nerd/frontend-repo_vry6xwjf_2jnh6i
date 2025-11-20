import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vibe Coding', href: '#vibecoding' },
  { label: 'Trademark', href: '#trademark' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all ${scrolled ? 'drop-shadow-[0_0_25px_rgba(99,102,241,0.25)]' : ''}`}>
      <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 blur-xl bg-gradient-to-tr from-fuchsia-500/40 to-sky-500/40 rounded-full" />
            <Sparkles className="relative text-sky-300" />
          </div>
          <span className="font-semibold text-sky-200 tracking-wide">Vibe Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#projects" className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-shadow">Explore</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-3">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#projects" onClick={() => setOpen(false)} className="mt-1 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white text-center">Explore</a>
          </nav>
        </div>
      )}
    </header>
  )
}
