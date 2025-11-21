import { Helmet } from 'react-helmet-async'
import CTAButton from '../components/CTAButton'

const markets = ['Georgia', 'Florida', 'Alabama', 'Mississippi', 'South Carolina', 'North Carolina', 'Tennessee']

const ServiceArea = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Service Area | IKM Road Runner LLC</title>
      <meta
        name="description"
        content="IKM Road Runner LLC provides box trucking coverage across the Southeast including Georgia, Florida, the Carolinas, Alabama, Mississippi, and Tennessee."
      />
    </Helmet>

    <header className="section-card space-y-4">
      <p className="badge">Service Area</p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Covering the Southeast with precision</h1>
      <p className="text-lg text-slate-300">
        We specialize in Southeastern lanes for consistent ETAs and regional expertise. If you have a new route, let&apos;s map it together.
      </p>
      <CTAButton to="/contact">Plan a Lane</CTAButton>
    </header>

    <section className="section-card">
      <h2 className="text-2xl font-semibold text-white">Primary Markets</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((state) => (
          <div key={state} className="rounded-xl border border-slate-800/70 bg-slate-900/70 px-4 py-3 text-slate-200">
            {state}
          </div>
        ))}
      </div>
    </section>

    <section className="section-card grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className="space-y-3">
        <p className="badge">Strategic Positioning</p>
        <h3 className="text-xl font-semibold text-white">Hubbed for fast response</h3>
        <p className="text-slate-300">
          Centralized near major interstates, we can quickly pivot between metro areas and industrial parks to keep freight flowing.
        </p>
      </div>
      <div className="rounded-2xl border border-brand-red/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-sm text-slate-200">
        <p className="font-semibold text-white">Need a special route?</p>
        <p className="mt-2 text-slate-300">Share your pickup, delivery, and time window. We&apos;ll map the most efficient path and share a confirmed ETA.</p>
      </div>
    </section>
  </div>
)

export default ServiceArea
