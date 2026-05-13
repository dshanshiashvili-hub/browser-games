const jobs = [
  {
    title: 'Senior Product Manager',
    company: 'Microsoft',
    location: 'Prague, Czech Republic',
    period: '2022 — Present',
    bullets: [
      'Define product strategy and roadmap for enterprise-scale initiatives, aligning across engineering, design, marketing, and senior leadership.',
      'Drive end-to-end product lifecycle from discovery and user research through delivery and post-launch iteration.',
      'Collaborate with cross-functional teams spanning multiple time zones and business units.',
      'Champion data-informed decision-making, establishing metrics frameworks and experimentation culture.',
    ],
  },
  {
    title: 'Head of Research and Development',
    company: 'JSC OPPA',
    location: 'Georgia',
    period: '2019 — 2022',
    bullets: [
      'Led the R&D division, overseeing product exploration, technology evaluation, and innovation pipeline.',
      'Managed multidisciplinary teams across engineering, research, and design.',
      'Defined strategic research direction and translated insights into actionable product initiatives.',
      'Established processes for rapid prototyping and market validation.',
    ],
  },
]

const education = [
  {
    degree: 'MBA — Business Administration',
    institution: 'Rensselaer Polytechnic Institute',
    period: '2017 — 2019',
    detail: 'Fulbright Scholar. Focus on technology strategy, entrepreneurship, and innovation management.',
  },
  {
    degree: 'MS — Technology Innovation',
    institution: 'Rensselaer Polytechnic Institute',
    period: '2017 — 2019',
    detail: 'Dual degree alongside MBA. Research focus on emerging technology commercialisation.',
  },
]

export default function Experience() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="section-label">Experience</p>
          <h1 className="section-title">Work history</h1>
          <div className="divider" />

          <div style={styles.timeline}>
            {jobs.map((job, i) => (
              <div key={i} style={styles.item}>
                <div style={styles.left}>
                  <span style={styles.period}>{job.period}</span>
                  <span style={styles.location}>{job.location}</span>
                </div>
                <div style={styles.connector}>
                  <div style={styles.dot} />
                  <div style={styles.line} />
                </div>
                <div style={styles.right}>
                  <h2 style={styles.jobTitle}>{job.title}</h2>
                  <p style={styles.company}>{job.company}</p>
                  <ul style={styles.bullets}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={styles.bullet}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
          <div className="divider" />

          <div style={styles.eduGrid}>
            {education.map((edu, i) => (
              <div key={i} style={styles.eduCard}>
                <p style={styles.eduPeriod}>{edu.period}</p>
                <h3 style={styles.eduDegree}>{edu.degree}</h3>
                <p style={styles.eduInst}>{edu.institution}</p>
                <p style={styles.eduDetail}>{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '180px 40px 1fr',
    gap: '0 1rem',
    paddingBottom: '3rem',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    paddingTop: '2px',
    textAlign: 'right',
  },
  period: {
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: 'var(--text)',
  },
  location: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  connector: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--red)',
    border: '2px solid #fff',
    boxShadow: '0 0 0 2px var(--red)',
    flexShrink: 0,
    marginTop: '2px',
  },
  line: {
    flex: 1,
    width: '1px',
    background: 'var(--border)',
    marginTop: '6px',
  },
  right: {
    paddingBottom: '0.5rem',
  },
  jobTitle: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: '0.2rem',
    letterSpacing: '-0.01em',
  },
  company: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: 'var(--red)',
    marginBottom: '1rem',
  },
  bullets: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  bullet: {
    fontSize: '0.9375rem',
    color: 'var(--text-muted)',
    lineHeight: 1.65,
    paddingLeft: '1rem',
    position: 'relative',
    '::before': { content: '"–"', position: 'absolute', left: 0 },
  },
  eduGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  eduCard: {
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.75rem',
    borderTop: '3px solid var(--red)',
  },
  eduPeriod: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  eduDegree: {
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: '0.25rem',
  },
  eduInst: {
    fontSize: '0.9rem',
    color: 'var(--red)',
    fontWeight: 500,
    marginBottom: '0.75rem',
  },
  eduDetail: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    lineHeight: 1.65,
  },
}
