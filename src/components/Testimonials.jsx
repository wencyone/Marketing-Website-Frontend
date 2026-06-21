const testimonials = [
  {
    quote: 'I bought the Dashboard UI Kit and integrated it into my project in 2 days. The quality and documentation were excellent.',
    name: 'Michael O.',
    role: 'Full Stack Developer',
    avatar: 'MO',
  },
  {
    quote: 'I sold my first SaaS project here. 40+ sales in 3 months. The platform is truly developer-friendly.',
    name: 'Sophie D.',
    role: 'Indie Maker',
    avatar: 'SD',
  },
  {
    quote: 'The best platform for sharing my open source projects. Community feedback is incredibly valuable.',
    name: 'Eric B.',
    role: 'Backend Developer',
    avatar: 'EB',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What developers <span className="gradient-text">are saying</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl glass glass-hover p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/20 text-xs font-bold text-brand-300">
                  {item.avatar}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold">{item.name}</cite>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
