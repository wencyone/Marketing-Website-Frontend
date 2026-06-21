const steps = [
  {
    step: '01',
    title: 'Create an Account',
    description: 'Sign up for free, build your profile, and verify your developer identity.',
  },
  {
    step: '02',
    title: 'Upload or Discover',
    description: 'Share your own software or browse thousands of projects and try demos.',
  },
  {
    step: '03',
    title: 'Sell or Buy',
    description: 'Set your price and start selling, or buy securely and start using right away.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">How It Works</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Get started in <span className="gradient-text">3 steps</span>
          </h2>
          <p className="mt-4 text-gray-400">
            No complicated processes. Start sharing or buying projects in minutes.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold shadow-lg shadow-brand-600/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>

                {index < steps.length - 1 && (
                  <div className="mx-auto mt-8 flex justify-center lg:hidden">
                    <svg className="h-6 w-6 text-brand-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
