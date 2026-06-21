import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl sm:mx-6 lg:mx-8">
        <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-lg shadow-brand-600/30">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">
              Code<span className="gradient-text">Hub</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Sign In
            </a>
            <a href="#" className="btn-primary !px-5 !py-2.5">
              Get Started Free
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg glass-hover md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/[0.06] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/[0.05]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/[0.06]" />
              <a href="#" className="btn-secondary">Sign In</a>
              <a href="#" className="btn-primary">Get Started Free</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
