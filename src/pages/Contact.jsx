import { Helmet } from 'react-helmet-async'
import CTAButton from '../components/CTAButton'

const Contact = () => (
  <div className="space-y-8">
    <Helmet>
      <title>Contact IKM Road Runner LLC | Request a Box Truck Quote</title>
      <meta
        name="description"
        content="Request a quote from IKM Road Runner LLC for box trucking across the Southeast. Fast responses from dispatch with USDOT 4486692 and MC 1772922-C credentials."
      />
    </Helmet>

    <header className="section-card space-y-4">
      <p className="badge">Contact</p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s plan your next load</h1>
      <p className="text-lg text-slate-300">
        Share your pickup, drop-off, and timing. Dispatch replies quickly with availability, pricing, and clear ETAs.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
        <span className="rounded-full bg-slate-800 px-3 py-1">USDOT 4486692</span>
        <span className="rounded-full bg-slate-800 px-3 py-1">MC 1772922-C</span>
      </div>
    </header>

    <section className="section-card grid gap-8 lg:grid-cols-2 lg:items-start">
      <form
        className="space-y-4"
        action="mailto:info@ikmroadrunner.com"
        method="post"
        encType="text/plain"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="Name"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="Company"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="Phone"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="pickup">
              Pickup City & State
            </label>
            <input
              id="pickup"
              name="Pickup"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-200" htmlFor="dropoff">
              Drop-off City & State
            </label>
            <input
              id="dropoff"
              name="Drop-off"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-200" htmlFor="details">
            Freight Details & Timing
          </label>
          <textarea
            id="details"
            name="Details"
            rows="4"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-brand-red focus:outline-none"
            placeholder="Weight, pallets, special handling, pickup window"
            required
          />
        </div>
        <CTAButton as="button" type="submit">Send via Email</CTAButton>
      </form>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
          <h3 className="text-lg font-semibold text-white">Need fast answers?</h3>
          <p className="mt-2 text-slate-300">
            Email us at <a className="text-brand-silver underline" href="mailto:info@ikmroadrunner.com">info@ikmroadrunner.com</a> for the quickest reply.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-red/30 bg-gradient-to-r from-brand-red/10 to-rose-700/10 p-5 text-sm text-slate-200">
          <p className="font-semibold text-white">Operating Standards</p>
          <p className="mt-2">Daily pre-trip inspections, securement checks, and friendly drivers ready to represent your brand well.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
