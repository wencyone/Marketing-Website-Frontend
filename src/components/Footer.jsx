const footerLinks = {
  Platform: ['Features', 'Marketplace', 'Pricing', 'FAQ'],
  Community: ['Blog', 'Forum', 'Events', 'Discord'],
  Company: ['About', 'Careers', 'Contact', 'Press'],
  Legal: ['Privacy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-800/50">
      <div className="container-max section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-lg font-bold">
                Code<span className="gradient-text">Hub</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              A modern marketplace where developers share, discover, and sell software.
            </p>
            <div className="mt-6 flex gap-3">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-white"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CodeHub. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built by developers, for developers ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
