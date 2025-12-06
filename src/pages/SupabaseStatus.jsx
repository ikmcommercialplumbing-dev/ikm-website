import { Helmet } from 'react-helmet-async'
import { getSupabaseConfigStatus, supabase } from '../lib/supabaseClient'

const StatusCard = ({ label, configured, variable }) => {
  const badgeStyles = configured
    ? 'bg-emerald-900/40 text-emerald-200 border-emerald-600/60'
    : 'bg-amber-900/40 text-amber-100 border-amber-500/60'

  return (
    <div className={`rounded-xl border p-4 ${badgeStyles}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-silver">{variable}</p>
      <p className="mt-2 text-lg font-semibold text-white">{configured ? 'Configured' : 'Missing'}</p>
      <p className="mt-1 text-sm text-slate-200">{label}</p>
    </div>
  )
}

const SupabaseStatus = () => {
  const { urlConfigured, keyConfigured, clientReady } = getSupabaseConfigStatus()

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Supabase Readiness | IKM Road Runner LLC</title>
        <meta
          name="description"
          content="Checklist to confirm Supabase environment variables are wired up before enabling database features."
        />
      </Helmet>

      <section className="section-card space-y-4">
        <p className="badge">Supabase</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Supabase readiness check</h1>
        <p className="text-slate-200">
          Before wiring the dashboard to your Supabase project, make sure the public credentials live in Vite environment
          variables instead of being hard-coded into the bundle.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <StatusCard label="Set VITE_SUPABASE_URL to your project URL" configured={urlConfigured} variable="Project URL" />
          <StatusCard label="Set VITE_SUPABASE_ANON_KEY to your anon/public key" configured={keyConfigured} variable="Anon Key" />
          <StatusCard label="Client initializes only when both values exist" configured={clientReady} variable="Client state" />
        </div>

        <div
          className={`rounded-xl border p-4 ${
            clientReady ? 'border-emerald-500/60 bg-emerald-950/40' : 'border-amber-500/60 bg-amber-950/30'
          }`}
        >
          <p className="text-lg font-semibold text-white">
            {clientReady
              ? 'Supabase client is ready to use.'
              : 'Add both environment variables to enable the Supabase client.'}
          </p>
          <p className="mt-1 text-sm text-slate-200">
            Values are pulled from <code className="rounded bg-slate-800 px-2 py-1 text-xs">.env</code> or
            <code className="rounded bg-slate-800 px-2 py-1 text-xs">.env.local</code> at build time. Keys never ship from
            inline strings.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 text-sm text-slate-200">
          <p className="font-semibold text-white">Next steps</p>
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li>Create a <code className="rounded bg-slate-800 px-2 py-1 text-xs">.env.local</code> file based on
              <code className="rounded bg-slate-800 px-2 py-1 text-xs">.env.example</code>.</li>
            <li>Populate <span className="font-semibold">VITE_SUPABASE_URL</span> and
              <span className="font-semibold">VITE_SUPABASE_ANON_KEY</span> with your project credentials.</li>
            <li>Use <span className="font-semibold">supabase</span> from <code className="rounded bg-slate-800 px-2 py-1 text-xs">src/lib/supabaseClient.js</code>
              in your data fetching hooks or services.</li>
          </ol>
          {supabase === null && (
            <p className="mt-3 text-slate-300">
              The client stays disabled until both values are present, preventing accidental requests with missing config.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default SupabaseStatus
