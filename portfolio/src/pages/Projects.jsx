const projects = [
  {
    name: 'Browser Games',
    description:
      'A collection of standalone browser games built with pure HTML, CSS, and JavaScript — no dependencies, no bundler. Includes a retro top-down pixel shooter with wave survival mechanics and a 2-player Tic Tac Toe.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    link: 'https://github.com/dshanshiashvili-hub/browser-games',
    type: 'Side project',
  },
]

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h1 className="section-title">Things I've built</h1>
        <div className="divider" />

        <div style={styles.grid}>
          {projects.map(project => (
            <div key={project.name} style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.type}>{project.type}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.ghLink}
                  aria-label="View on GitHub"
                >
                  <GithubIcon />
                </a>
              </div>
              <h2 style={styles.name}>{project.name}</h2>
              <p style={styles.desc}>{project.description}</p>
              <div style={styles.tech}>
                {project.tech.map(t => (
                  <span key={t} style={styles.techTag}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.viewLink}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        <div style={styles.note}>
          <p style={styles.noteText}>
            More projects coming soon. Most of my product work is covered by NDAs —
            reach out to discuss case studies directly.
          </p>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  card: {
    background: 'var(--bg-alt)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'box-shadow 0.15s',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--red)',
  },
  ghLink: {
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.15s',
  },
  name: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '-0.01em',
  },
  desc: {
    fontSize: '0.9375rem',
    color: 'var(--text-muted)',
    lineHeight: 1.65,
    flex: 1,
  },
  tech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  techTag: {
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '0.2rem 0.6rem',
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: '2rem',
    color: 'var(--text-muted)',
  },
  viewLink: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--red)',
    marginTop: '0.25rem',
    display: 'inline-block',
  },
  note: {
    borderTop: '1px solid var(--border)',
    paddingTop: '2rem',
    maxWidth: '560px',
  },
  noteText: {
    fontSize: '0.9375rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
  },
}
