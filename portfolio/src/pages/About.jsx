import { Link } from 'react-router-dom'

const traits = [
  { label: 'Customer-obsessed', desc: 'I start every initiative by asking "why" — understanding the user\'s real problem before proposing solutions.' },
  { label: 'Technically fluent', desc: 'Deep enough to collaborate with engineers as a peer, without pretending to be one.' },
  { label: 'Detail-oriented', desc: 'I sweat the edge cases so they don\'t become incidents. Precision in specs translates to quality in product.' },
  { label: 'Global mindset', desc: 'Worked and studied across continents. Comfortable navigating cross-cultural teams and distributed stakeholders.' },
]

export default function About() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="section-label">About</p>
          <h1 className="section-title">Building products that matter</h1>
          <div className="divider" />

          <div style={styles.grid}>
            <div style={styles.bio}>
              <p style={styles.lead}>
                I'm Demetre — a Senior Product Manager at Microsoft based in Prague,
                with a decade of experience taking ideas from whiteboard to shipped product.
              </p>
              <p style={styles.body}>
                My path has been anything but linear. I started in research and development,
                leading cross-functional teams to explore emerging technology before transitioning
                into product management at scale. Today I work on enterprise-grade initiatives
                at Microsoft, where I'm responsible for strategy, discovery, delivery, and everything
                in between.
              </p>
              <p style={styles.body}>
                I hold an MBA and an MS in Technology Innovation from Rensselaer Polytechnic Institute,
                where I studied as a Fulbright Scholar — a program that reinforced my belief
                that the best products come from deeply understanding diverse perspectives.
              </p>
              <p style={styles.body}>
                Outside of my full-time role, I take on freelance projects where I can help
                early-stage teams and founders shape their product vision, prioritise ruthlessly,
                and build the right thing — not just build the thing right.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Work with me
              </Link>
            </div>

            <div style={styles.traits}>
              {traits.map(({ label, desc }) => (
                <div key={label} style={styles.trait}>
                  <div style={styles.traitAccent} />
                  <h3 style={styles.traitLabel}>{label}</h3>
                  <p style={styles.traitDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Why hire me</p>
          <h2 className="section-title">What I bring to your project</h2>
          <div className="divider" />
          <div style={styles.pillars}>
            {[
              { n: '10+', label: 'Years of product experience' },
              { n: 'MBA', label: 'Business strategy & leadership' },
              { n: 'MS', label: 'Technology innovation' },
              { n: 'MSFT', label: 'Enterprise-scale product work' },
            ].map(({ n, label }) => (
              <div key={n} style={styles.pillar}>
                <span style={styles.pillarNum}>{n}</span>
                <span style={styles.pillarLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  bio: {},
  lead: {
    fontSize: '1.125rem',
    fontWeight: 500,
    color: 'var(--text)',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
  },
  body: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.75,
    marginBottom: '1rem',
  },
  traits: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  trait: {
    paddingLeft: '1rem',
    borderLeft: '2px solid var(--border)',
    position: 'relative',
  },
  traitAccent: {
    position: 'absolute',
    left: '-2px',
    top: 0,
    width: '2px',
    height: '24px',
    background: 'var(--red)',
  },
  traitLabel: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  traitDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: 1.65,
  },
  pillars: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
  },
  pillar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1.5rem',
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
  },
  pillarNum: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'var(--red)',
    letterSpacing: '-0.02em',
  },
  pillarLabel: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    lineHeight: 1.4,
  },
}
