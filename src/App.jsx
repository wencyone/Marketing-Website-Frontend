import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Marketplace from './components/Marketplace'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed -top-40 -right-40 h-[600px] w-[600px] glow-orb animate-pulse-glow" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 h-[500px] w-[500px] glow-orb animate-pulse-glow" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Marketplace />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
