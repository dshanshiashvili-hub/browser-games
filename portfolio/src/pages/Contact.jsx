const links = [
  {
    label: 'Email',
    value: 'dshanshiashvili1@gmail.com',
    href: 'mailto:dshanshiashvili1@gmail.com',
    desc: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'dshanshiashvili-hub',
    href: 'https://github.com/dshanshiashvili-hub',
    desc: 'Code and side projects',
  },
  {
    label: 'LinkedIn',
    value: 'demetreshanshiashvili',
    href: 'https://www.linkedin.com/in/demetreshanshiashvili/',
    desc: 'Professional background',
  },
]

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h1 className="section-title">Let's work together</h1>
        <div className="divider" />

        <div style={styles.layout}>
          <div style={styles.left}>
            <p style={styles.intro}>
              I'm open to freelance engagements — product strategy, discovery sprints,
              roadmap reviews, and advisory roles. If you're building something and need
              an experienced product perspective, let's talk.
            </p>
            <p style={styles.body}>
              The best way to get in touch is email. I typically respond within 24 hours
              on weekdays.
            </p>

            <a
              href="mailto:dshanshiashvili1@gmail.com"
              className="btn btn-primary"
              style={styles.emailBtn}
            >
              Send me an email
            </a>
          </div>

          <div style={styles.right}>
            {links.map(({ label, value, href, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={styles.linkCard}
              >
                <div>
                  <p style={styles.linkLabel}>{label}</p>
                  <p style={styles.linkValue}>{value}</p>
                  <p style={styles.linkDesc}>{desc}</p>
                </div>
                <span style={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  left: {},
  intro: {
    fontSize: '1.0625rem',
    fontWeight: 500,
    color: 'var(--text)',
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  body: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    marginBottom: '2rem',
  },
  emailBtn: {
    display: 'inline-flex',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  linkCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    background: 'var(--bg-alt)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    textDecoration: 'none',
  },
  linkLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--red)',
    marginBottom: '0.2rem',
  },
  linkValue: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--text)',
    marginBottom: '0.15rem',
  },
  linkDesc: {
    fontSize: '0.8125rem',
    color: 'var(--text-muted)',
  },
  arrow: {
    fontSize: '1.125rem',
    color: 'var(--text-muted)',
    flexShrink: 0,
  },
}
