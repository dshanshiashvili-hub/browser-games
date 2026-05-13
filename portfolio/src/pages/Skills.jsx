const groups = [
  {
    category: 'Product Management',
    skills: [
      'Product Strategy', 'Roadmapping', 'Product Discovery', 'OKRs & KPIs',
      'Go-to-Market Strategy', 'Pricing & Packaging', 'Feature Prioritisation',
    ],
  },
  {
    category: 'Research & Analytics',
    skills: [
      'User Research', 'Usability Testing', 'A/B Experimentation',
      'Data Analysis', 'SQL', 'Metrics Frameworks', 'Competitive Analysis',
    ],
  },
  {
    category: 'Process & Leadership',
    skills: [
      'Agile / Scrum', 'Stakeholder Management', 'Cross-functional Leadership',
      'Executive Communication', 'Workshop Facilitation', 'Team Building',
    ],
  },
  {
    category: 'Technical',
    skills: [
      'API Concepts', 'Technical Specifications', 'System Design (conceptual)',
      'AI / ML Product Thinking', 'Prototyping', 'SQL',
    ],
  },
]

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <h1 className="section-title">What I work with</h1>
        <div className="divider" />

        <div style={styles.grid}>
          {groups.map(({ category, skills }) => (
            <div key={category} style={styles.group}>
              <h2 style={styles.groupTitle}>{category}</h2>
              <div style={styles.tags}>
                {skills.map(skill => (
                  <span key={skill} style={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Beyond the labels — I believe the best PMs are multipliers.
            My goal is always to leave a team more capable and a product more valuable than I found them.
          </p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '3rem',
  },
  group: {
    background: 'var(--bg-alt)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.75rem',
  },
  groupTitle: {
    fontSize: '0.8125rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--red)',
    marginBottom: '1rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    display: 'inline-block',
    padding: '0.35rem 0.75rem',
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    color: 'var(--text)',
    fontWeight: 500,
  },
  footer: {
    borderTop: '1px solid var(--border)',
    paddingTop: '2rem',
    maxWidth: '600px',
  },
  footerText: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.75,
    fontStyle: 'italic',
  },
}
