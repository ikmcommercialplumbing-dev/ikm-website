import { Helmet } from 'react-helmet-async'
import CTAButton from '../components/CTAButton'

const serviceList = [
  {
    title: 'Regional Box Trucking',
    detail: 'Scheduled routes and dedicated capacity throughout the Southeast for retail, industrial, and distribution partners.',
  },
  {
    title: 'Final-Mile Delivery',
    detail: 'Lift-gate equipped trucks with trained crews to protect freight and meet delivery windows with white-glove care.',
  },
  {
    title: 'Expedited & Same-Day',
    detail: 'Rapid response dispatch for time-critical freight with direct-to-destination routing and proactive ETA updates.',
  },
]

const Services = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Box Truck Services | IKM Road Runner LLC</title>
      <meta
        name="description"
        content="Explore box truck services from IKM Road Runner LLC: regional trucking, final-mile delivery, and expedited freight across the Southeast."
      />
    </Helmet>

    <header className="section-card space-y-4">
      <p className="badge">Services</p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Built for freight that demands reliability</h1>
      <p className="text-lg text-slate-300">
        From scheduled lanes to urgent moves, our fleet and dispatch operate with the urgency and care your customers expect.
      </p>
      <CTAButton to="/contact">Schedule Service</CTAButton>
    </header>

    <section className="grid gap-6 lg:grid-cols-3">
      {serviceList.map((service) => (
        <div key={service.title} className="section-card">
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-slate-300">{service.detail}</p>
        </div>
      ))}
    </section>

    <section className="section-card grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className="space-y-3">
        <p className="badge">Equipment</p>
        <h2 className="text-2xl font-semibold text-white">Box trucks designed for care and speed</h2>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>• 26 ft box trucks with lift gates and e-track for securement</li>
          <li>• Pallet jacks, straps, and moving blankets onboard</li>
          <li>• Climate-conscious operation with well-maintained engines</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-brand-red/30 bg-slate-900/70 p-6">
        <h3 className="text-xl font-semibold text-white">Simplicity first</h3>
        <p className="mt-3 text-slate-300">
          Clear ETAs, direct communication with drivers, and paperwork handled with precision. We align with your SOPs to make onboarding seamless.
        </p>
      </div>
    </section>
  </div>
)

export default Services
