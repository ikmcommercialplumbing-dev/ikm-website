import { Helmet } from 'react-helmet-async'
import CTAButton from '../components/CTAButton'

const About = () => (
  <div className="space-y-8">
    <Helmet>
      <title>About IKM Road Runner LLC | Family-Owned Box Trucking</title>
      <meta
        name="description"
        content="Learn about IKM Road Runner LLC, a family-owned box trucking company serving the Southeast with safety-first drivers, modern trucks, and reliable communication."
      />
    </Helmet>

    <header className="section-card space-y-4">
      <p className="badge">About Us</p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Driven by family values, powered by professional discipline</h1>
      <p className="text-lg text-slate-300">
        IKM Road Runner LLC was built to deliver freight with heart and hustle. We operate like a family: every load gets the same
        attention, every partner receives transparent updates, and every delivery is treated like it matters—because it does.
      </p>
      <CTAButton to="/contact">Talk with Dispatch</CTAButton>
    </header>

    <section className="grid gap-6 lg:grid-cols-3">
      {["Punctual dispatch culture", "Meticulous equipment care", "Professional drivers"].map((title) => (
        <div key={title} className="section-card">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-slate-300">
            We maintain strict standards for on-time departures, daily inspections, and customer communication to keep your freight moving safely.
          </p>
        </div>
      ))}
    </section>

    <section className="section-card grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="space-y-4">
        <p className="badge">Credentialed & Compliant</p>
        <h2 className="text-2xl font-semibold text-white">USDOT 4486692 • MC 1772922-C</h2>
        <p className="text-slate-300">
          Our credentials reflect our commitment to safety and accountability. From hours-of-service compliance to proactive maintenance, we keep equipment and drivers inspection-ready.
        </p>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>• 26 ft box trucks with lift gates and logistics straps</li>
          <li>• ELD-equipped fleet with GPS visibility</li>
          <li>• Fully insured for regional operations</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6">
        <h3 className="text-xl font-semibold text-white">Our promise</h3>
        <p className="mt-3 text-slate-300">
          We respond quickly, plan routes intelligently, and communicate clearly so you can count on consistent performance day after day.
        </p>
      </div>
    </section>
  </div>
)

export default About
