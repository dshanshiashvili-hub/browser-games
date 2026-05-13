import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section style={styles.hero}>
      <div className="container" style={styles.inner}>
        <div style={styles.content}>
          <p style={styles.eyebrow}>Available for freelance</p>
          <h1 style={styles.name}>Demetre<br />Shanshiashvili</h1>
          <p style={styles.title}>Product Builder</p>
          <p style={styles.tagline}>
            Senior Product Manager at Microsoft. I turn ambiguous problems into
            scalable products that users love — from zero-to-one initiatives
            to enterprise-scale platforms.
          </p>
          <div style={styles.actions}>
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
          <div style={styles.meta}>
            <span style={styles.metaItem}>
              <span style={styles.metaDot} />
              Prague, Czech Republic
            </span>
            <span style={styles.metaItem}>
              <span style={styles.metaDot} />
              Open to global freelance
            </span>
          </div>
        </div>

        <div style={styles.aside}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Currently at</p>
            <p style={styles.cardValue}>Microsoft</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Role</p>
            <p style={styles.cardValue}>Senior Product Manager</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Education</p>
            <p style={styles.cardValue}>MBA + MS, Rensselaer Polytechnic Institute</p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Distinction</p>
            <p style={styles.cardValue}>Fulbright Alumnus</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: 'calc(100vh - var(--nav-h))',
    display: 'flex',
    alignItems: 'center',
    padding: '5rem 0',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'center',
  },
  content: {},
  eyebrow: {
    fontSize: '0.8125rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--red)',
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  name: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.05,
    color: 'var(--text)',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 400,
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  },
  tagline: {
    fontSize: '1.0625rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    maxWidth: '480px',
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  meta: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
  },
  metaDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--red)',
    display: 'inline-block',
  },
  aside: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  card: {
    background: 'var(--bg-alt)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.25rem',
  },
  cardLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
  },
  cardValue: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text)',
    lineHeight: 1.4,
  },
}
