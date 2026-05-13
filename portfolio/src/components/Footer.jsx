import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <span style={styles.name}>Demetre Shanshiashvili</span>
        <div style={styles.links}>
          <a href="mailto:dshanshiashvili1@gmail.com" style={styles.link}>Email</a>
          <a href="https://github.com/dshanshiashvili-hub" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/demetreshanshiashvili/" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
        </div>
        <span style={styles.copy}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '2rem 0',
    background: 'var(--bg)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  name: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text)',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    transition: 'color 0.15s',
  },
  copy: {
    fontSize: '0.8125rem',
    color: 'var(--text-muted)',
  },
}
