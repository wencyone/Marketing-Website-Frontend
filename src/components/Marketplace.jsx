const products = [
  {
    name: 'E-Commerce Starter Kit',
    author: 'Alex K.',
    price: '$129',
    rating: 4.9,
    reviews: 47,
    tag: 'Full Stack',
    tech: ['Next.js', 'Stripe'],
  },
  {
    name: 'Dashboard UI Kit',
    author: 'Sarah A.',
    price: '$35',
    rating: 4.8,
    reviews: 112,
    tag: 'UI/UX',
    tech: ['Figma', 'React'],
  },
  {
    name: 'REST API Boilerplate',
    author: 'Chris M.',
    price: 'Free',
    rating: 4.7,
    reviews: 89,
    tag: 'Open Source',
    tech: ['Node.js', 'PostgreSQL'],
  },
  {
    name: 'Mobile Chat App',
    author: 'Emily S.',
    price: '$79',
    rating: 5.0,
    reviews: 23,
    tag: 'Mobile',
    tech: ['React Native', 'Firebase'],
  },
  {
    name: 'SEO Analyzer Tool',
    author: 'Brian T.',
    price: '$19',
    rating: 4.6,
    reviews: 56,
    tag: 'SaaS',
    tech: ['Python', 'FastAPI'],
  },
  {
    name: 'Auth & Payment SDK',
    author: 'Dana Y.',
    price: '$59',
    rating: 4.9,
    reviews: 34,
    tag: 'SDK',
    tech: ['TypeScript', 'OAuth'],
  },
]

export default function Marketplace() {
  return (
    <section id="marketplace" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">Marketplace</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Popular <span className="gradient-text">software</span>
            </h2>
            <p className="mt-4 max-w-lg text-gray-400">
              The most loved projects in our community. Try demos, buy, or get inspired.
            </p>
          </div>
          <a href="#" className="btn-secondary shrink-0">
            View All
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl glass glass-hover transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 bg-gradient-to-br from-surface-700 to-surface-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent" />
                <svg className="h-12 w-12 text-gray-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="absolute top-3 left-3 rounded-md bg-brand-600/20 px-2 py-1 text-xs font-medium text-brand-300">
                  {product.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-snug">{product.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">@{product.author}</p>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-brand-300">{product.price}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <button type="button" className="text-sm font-medium text-brand-400 transition-colors hover:text-brand-300">
                    View →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
