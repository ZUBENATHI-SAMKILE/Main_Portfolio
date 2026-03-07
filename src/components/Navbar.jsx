import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/',               label: 'Home' },
  { to: '/about',          label: 'About' },
  { to: '/skills',         label: 'Skills' },
  { to: '/projects',       label: 'Projects' },
  { to: '/experience',     label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-initials">ZS</span>
          <span className="logo-name">Zubenathi Samkile</span>
        </NavLink>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="mailto:samkilezubenathi@gmail.com"
            className="btn btn-primary nav-cta"
          >
            Hire Me
          </a>
        </nav>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}