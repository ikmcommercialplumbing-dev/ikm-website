import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CTAButton from './CTAButton'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-rose-700 text-sm font-bold shadow-soft">
            IKM
          </div>
          <div className="leading-tight">
            <p className="text-sm text-brand-silver">IKM Road Runner LLC</p>
            <p className="text-xs text-slate-300">Reliable Box Trucking</p>
          </div>
        </Link>
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:border-brand-red hover:text-white sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide text-slate-200 sm:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-brand-silver ${isActive ? 'text-white' : 'text-slate-300'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <CTAButton as={Link} to="/contact" size="sm">
            Get a Quote
          </CTAButton>
        </nav>
      </div>
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-900/95 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition hover:text-brand-silver ${isActive ? 'text-white' : 'text-slate-300'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <CTAButton as={Link} to="/contact" onClick={() => setOpen(false)}>
              Get a Quote
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
