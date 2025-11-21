import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">IKM Road Runner LLC</p>
          <p className="text-sm">USDOT 4486692 • MC 1772922-C</p>
          <p className="text-sm text-slate-400">Reliable box trucking across the Southeast.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wide text-slate-200">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/about">About</Link>
          <Link className="hover:text-white" to="/services">Services</Link>
          <Link className="hover:text-white" to="/service-area">Service Area</Link>
          <Link className="hover:text-white" to="/contact">Contact</Link>
        </div>
      </div>
      <div className="bg-slate-900/90 py-3 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IKM Road Runner LLC. Built for speed, safety, and service.
      </div>
    </footer>
  )
}

export default Footer
