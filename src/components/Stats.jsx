const stats = [
  { value: '2.4K+', label: 'Active Developers' },
  { value: '850+', label: 'Shared Projects' },
  { value: '$120K', label: 'Total Sales' },
  { value: '4.8', label: 'Average Rating' },
]

export default function Stats() {
  return (
    <section className="section-padding !py-16">
      <div className="container-max">
        <div className="rounded-2xl glass p-8 sm:p-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
