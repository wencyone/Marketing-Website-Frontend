const tags = ['React', 'Node.js', 'Python', 'Mobile', 'SaaS', 'API']

export default function Hero() {
  return (
    <section className="section-padding pt-32 lg:pt-40">
      <div className="container-max text-center">
        <div className="animate-fade-up opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            2,400+ developers have joined
          </span>
        </div>

        <h1 className="animate-fade-up opacity-0 delay-100 mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          Share your software,{' '}
          <span className="gradient-text">discover</span>
          <br className="hidden sm:block" />
          and buy
        </h1>

        <p className="animate-fade-up opacity-0 delay-200 mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg lg:text-xl">
          A modern marketplace where developers showcase projects, share open source code,
          and buy ready-made software with confidence.
        </p>

        <div className="animate-fade-up opacity-0 delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className="btn-primary w-full sm:w-auto">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Share a Project
          </a>
          <a href="#marketplace" className="btn-secondary w-full sm:w-auto">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Explore Software
          </a>
        </div>

        <div className="animate-fade-up opacity-0 delay-400 mt-12 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg glass px-3 py-1.5 text-xs font-medium text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="animate-fade-up opacity-0 delay-500 relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-600/20 via-violet-600/20 to-brand-600/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl glass shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-gray-500">codehub.com/marketplace</span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
              {[
                { name: 'TaskFlow Pro', price: '$49', tag: 'SaaS', color: 'from-blue-500/20 to-cyan-500/20' },
                { name: 'AuthKit', price: 'Free', tag: 'Open Source', color: 'from-green-500/20 to-emerald-500/20' },
                { name: 'DataViz UI', price: '$29', tag: 'UI Kit', color: 'from-violet-500/20 to-purple-500/20' },
              ].map((item) => (
                <div key={item.name} className={`rounded-xl bg-gradient-to-br ${item.color} p-4 text-left glass-hover`}>
                  <div className="mb-3 h-24 rounded-lg bg-surface-800/80 flex items-center justify-center">
                    <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-xs rounded-md bg-brand-600/20 px-2 py-0.5 text-brand-300">{item.tag}</span>
                  </div>
                  <span className="mt-1 block text-xs text-gray-500">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
