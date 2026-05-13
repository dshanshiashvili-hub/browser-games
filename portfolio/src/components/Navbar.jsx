import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <Link to="/" style={styles.logo}>
          DS<span style={styles.dot}>.</span>
        </Link>

        <nav style={styles.nav}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                ...styles.navLink,
                color: isActive ? 'var(--red)' : 'var(--text-muted)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" style={styles.cta}>
            Hire Me
          </Link>
        </nav>

        <button
          style={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ ...styles.bar, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ ...styles.bar, opacity: open ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div style={styles.mobileMenu}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                ...styles.mobileLink,
                color: isActive ? 'var(--red)' : 'var(--text)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} style={styles.mobileCta}>
            Hire Me
          </Link>
        </div>
      )}
    </header>
  )
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border)',
    height: 'var(--nav-h)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
  },
  dot: {
    color: 'var(--red)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    transition: 'color 0.15s',
  },
  cta: {
    padding: '0.5rem 1.25rem',
    fontSize: '0.875rem',
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  bar: {
    display: 'block',
    width: '22px',
    height: '2px',
    background: 'var(--text)',
    transition: 'all 0.2s',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem 1.5rem',
    borderTop: '1px solid var(--border)',
    background: '#fff',
    gap: '1rem',
  },
  mobileLink: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  mobileCta: {
    display: 'inline-block',
    marginTop: '0.5rem',
    padding: '0.6rem 1.25rem',
    background: 'var(--red)',
    color: '#fff',
    borderRadius: 'var(--radius)',
    fontWeight: 500,
    fontSize: '0.9375rem',
    width: 'fit-content',
  },
}
