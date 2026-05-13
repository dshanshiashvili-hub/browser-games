# Portfolio Website Spec — Demetre Shanshiashvili

## Overview

Personal portfolio website for **Demetre Shanshiashvili**, also known professionally as a **Product Builder**. The site showcases his product management background, work experience, skills, and projects — with a primary goal of attracting **freelance clients**.

---

## Brand & Identity

| Field | Value |
|-------|-------|
| Name | Demetre Shanshiashvili |
| Tagline | Product Builder |
| Current role | Senior Product Manager at Microsoft |
| Location | Prague, Czech Republic |
| Availability | Open to global freelance |
| Email | dshanshiashvili1@gmail.com |
| GitHub | dshanshiashvili-hub |
| LinkedIn | linkedin.com/in/demetreshanshiashvili |

---

## Design System

### Style
- **Aesthetic:** Minimal, clean
- **Mode:** Light only
- **Tone:** Professional, confident, understated

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--red` | `#C8102E` | Primary accent, CTAs, highlights |
| `--red-hover` | `#A50D24` | Button hover state |
| `--bg` | `#FFFFFF` | Page background |
| `--bg-alt` | `#F9FAFB` | Section alternating background, cards |
| `--text` | `#111827` | Primary text |
| `--text-muted` | `#6B7280` | Secondary text, descriptions |
| `--border` | `#E5E7EB` | Dividers, card borders |

### Typography
- **Font:** Inter (Google Fonts) — weights 300, 400, 500, 600, 700
- **Fallback:** `-apple-system, BlinkMacSystemFont, sans-serif`
- **Base size:** 16px
- **Line height:** 1.6 body, 1.05 large headings

### Layout
- **Max content width:** 1100px, centered
- **Section padding:** 5rem vertical
- **Container padding:** 2rem horizontal
- **Border radius:** 6px

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Routing | React Router v6 |
| Styling | Plain CSS with custom properties |
| Fonts | Google Fonts (Inter) |
| Hosting | TBD |

---

## Site Structure

Multi-page React app with client-side routing. Sticky navbar + footer persist across all pages.

```
/               Home
/about          About
/experience     Experience
/skills         Skills
/projects       Projects
/contact        Contact
```

---

## Pages

### Home `/`
**Purpose:** First impression. Communicate who Demetre is and drive action.

**Layout:** Two-column grid (hero copy left, stat cards right)

**Elements:**
- Eyebrow: "Available for freelance" in red
- H1: Full name (large, ~4rem, tight tracking)
- Subtitle: "Product Builder"
- Tagline paragraph: 2–3 sentence summary
- Two CTAs: "View My Work" (primary/red) + "Get in Touch" (outline)
- Meta row: location + freelance availability with red dot indicators
- Right column: 4 stat cards (Currently at, Role, Education, Distinction)

---

### About `/about`
**Purpose:** Build trust and answer "why should I hire this person?"

**Sections:**
1. **Bio** — 4 paragraphs covering career trajectory, Microsoft, education, Fulbright, freelance intent
2. **Character traits** — 4 items with red left-border accent (Customer-obsessed, Technically fluent, Detail-oriented, Global mindset)
3. **Why hire me** — 4 stat pillars (10+ years, MBA, MS, MSFT)

---

### Experience `/experience`
**Purpose:** Work history in a scannable, credible format.

**Work Experience (timeline layout):**

| Role | Company | Period |
|------|---------|--------|
| Senior Product Manager | Microsoft | 2022 — Present |
| Head of Research and Development | JSC OPPA | 2019 — 2022 |

Each entry: title, company (in red), location, period, 4 bullet points.

**Education (card grid):**

| Degree | Institution | Period |
|--------|-------------|--------|
| MBA — Business Administration | Rensselaer Polytechnic Institute | 2017 — 2019 |
| MS — Technology Innovation | Rensselaer Polytechnic Institute | 2017 — 2019 |

Note: Fulbright Scholar. Dual degree.

---

### Skills `/skills`
**Purpose:** Quick scan of capabilities for potential clients.

**Four groups (2×2 grid of cards):**

| Group | Skills |
|-------|--------|
| Product Management | Product Strategy, Roadmapping, Product Discovery, OKRs & KPIs, Go-to-Market Strategy, Pricing & Packaging, Feature Prioritisation |
| Research & Analytics | User Research, Usability Testing, A/B Experimentation, Data Analysis, SQL, Metrics Frameworks, Competitive Analysis |
| Process & Leadership | Agile / Scrum, Stakeholder Management, Cross-functional Leadership, Executive Communication, Workshop Facilitation, Team Building |
| Technical | API Concepts, Technical Specifications, System Design (conceptual), AI / ML Product Thinking, Prototyping, SQL |

Skills displayed as pill/tag components.

---

### Projects `/projects`
**Purpose:** Demonstrate hands-on building ability.

**Current projects:**

| Project | Type | Tech | Link |
|---------|------|------|------|
| Browser Games | Side project | HTML, CSS, JavaScript, Canvas API | github.com/dshanshiashvili-hub/browser-games |

Note: Most PM work is under NDA. Contact page encourages direct outreach for case studies.

---

### Contact `/contact`
**Purpose:** Convert visitors into leads. Email-only contact (no form).

**Layout:** Two-column (copy + intent left, link cards right)

**Copy:** Explains openness to freelance — product strategy, discovery sprints, roadmap reviews, advisory roles.

**Links:**
| Label | Value |
|-------|-------|
| Email | dshanshiashvili1@gmail.com |
| GitHub | dshanshiashvili-hub |
| LinkedIn | linkedin.com/in/demetreshanshiashvili |

**Primary CTA:** "Send me an email" (mailto link, red button)

---

## Components

### Navbar
- Sticky, frosted glass (`backdrop-filter: blur`)
- Left: `DS.` monogram (dot in red)
- Right: About | Experience | Skills | Projects | + "Hire Me" red button
- Active link highlighted in red
- Mobile: hamburger menu with animated bars

### Footer
- Simple single row: name left, links center, copyright right
- Links: Email, GitHub, LinkedIn

---

## Interactions & UX

- Scroll to top on route change
- Hover transitions: 150–180ms ease on links, buttons, cards
- No animations or heavy motion — content is the focus
- All external links open in new tab with `rel="noopener noreferrer"`

---

## Content Gaps (to fill in later)

- [ ] Exact dates for Microsoft and JSC OPPA roles
- [ ] Additional work experience not captured from LinkedIn
- [ ] PM case studies / project writeups (currently gated by NDA)
- [ ] Profile photo (if desired)
- [ ] Twitter/X or YouTube links (if wanted in footer)
- [ ] Hosting setup and custom domain
