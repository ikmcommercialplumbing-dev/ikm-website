import { Helmet } from 'react-helmet-async'
import CTAButton from '../components/CTAButton'

const stats = [
  { label: 'Dedicated Box Trucks', value: '26 ft fleet' },
  { label: 'On-Time Delivery', value: '99% punctuality' },
  { label: 'Operating Region', value: 'Southeast US' },
]

const Home = () => {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>IKM Road Runner LLC | Reliable Box Trucking Across the Southeast</title>
        <meta
          name="description"
          content="IKM Road Runner LLC delivers dependable box trucking services across the Southeast with safety-first drivers, modern trucks, and fast communication."
        />
      </Helmet>

      <section className="section-card relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(193,18,31,0.35), transparent 35%)' }} />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="badge">Reliable Box Trucking Across the Southeast</div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Logistics that move as fast as your business
            </h1>
            <p className="text-lg text-slate-300">
              IKM Road Runner LLC keeps freight moving with punctual, safety-focused box truck deliveries. From last-mile routes to
              regional hauls, we deliver with precision, transparency, and care.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton to="/contact">Request a Quote</CTAButton>
              <CTAButton as="a" href="mailto:info@ikmroadrunner.com" className="bg-slate-100 text-brand-slate hover:text-slate-900" size="md">
                Email Dispatch
              </CTAButton>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Credentials you can trust</p>
              <p className="text-slate-300">USDOT 4486692 • MC 1772922-C</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6 shadow-soft">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4">
                    <p className="text-sm uppercase tracking-wide text-brand-silver">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-brand-red to-rose-700 p-[1px]">
                <div className="rounded-[10px] bg-slate-950/90 p-5">
                  <h2 className="text-lg font-semibold text-white">Why IKM?</h2>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    <li>• GPS-tracked trucks with proactive updates</li>
                    <li>• Veteran drivers who prioritize safety and compliance</li>
                    <li>• Flexible scheduling for e-commerce and industrial freight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="section-card">
          <p className="badge mb-3">Communication</p>
          <h3 className="text-2xl font-semibold text-white">Live updates, zero surprises</h3>
          <p className="mt-3 text-slate-300">
            Dispatch keeps you in the loop from pickup to delivery with proactive ETA updates so your operations never miss a beat.
          </p>
        </div>
        <div className="section-card">
          <p className="badge mb-3">Safety</p>
          <h3 className="text-2xl font-semibold text-white">Compliance-ready drivers</h3>
          <p className="mt-3 text-slate-300">
            Our team operates with meticulous pre-trip inspections, securement standards, and professional insurance coverage.
          </p>
        </div>
        <div className="section-card">
          <p className="badge mb-3">Speed</p>
          <h3 className="text-2xl font-semibold text-white">Built for fast turns</h3>
          <p className="mt-3 text-slate-300">
            With responsive dispatch and well-maintained equipment, we keep commitments tight and freight moving on schedule.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
