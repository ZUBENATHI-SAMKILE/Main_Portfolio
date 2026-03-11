import { Link } from 'react-router-dom'
import { ArrowRight,GraduationCap, MapPin , Github, Linkedin, Mail, Download, Code2, Database, Smartphone } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Years Learning' },
  { value: '20+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: 'BSc', label: 'ICT Degree' },
]

const HIGHLIGHTS = [
  { icon: <Code2 size={20} />, title: 'Full Stack Dev', desc: 'React, Django, Node.js, Flask- end-to-end web development.' },
  { icon: <Database size={20} />, title: 'Data Science', desc: 'Python, SQL, ML, Pandas- turning data into insights.' },
  { icon: <Smartphone size={20} />, title: 'Mobile Dev', desc: 'Java Android - intuitive mobile application development.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-dot-grid" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge fade-up">
              <span className="badge-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title fade-up fade-up-1">
              Hi, I'm <em>Zubenathi</em><br />
              Samkile
            </h1>

            <p className="hero-sub fade-up fade-up-2">
              Software Developer & ICT Graduate from Durban University of Technology.
              I build clean, scalable web applications and intelligent data systems.
            </p>

            <div className="hero-actions fade-up fade-up-3">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>

            <div className="hero-social fade-up fade-up-4">
              <a href="https://github.com/ZUBENATHI-SAMKILE" target="_blank" rel="noreferrer" className="hero-social-link">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/zubenathi-samkile" target="_blank" rel="noreferrer" className="hero-social-link">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:samkilezubenathi@gmail.com" className="hero-social-link">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="hero-card-wrap fade-up fade-up-2">
            <div className="hero-profile-card">
              <div className="profile-avatar">ZS</div>
              <div className="profile-info">
                <p className="profile-name">Zubenathi Samkile</p>
                <p className="profile-title">Software Developer</p>
                <p className="profile-uni"><GraduationCap size={16}  className="icon" /> DUT · ICT Graduate</p>
                <p className="profile-location"><MapPin size={16}  className="icon" /> Eastern Cape, South Africa</p>
              </div>
              <div className="profile-tags">
                <span className="tag tag-blue">Full Stack</span>
                <span className="tag tag-green">Data Science</span>
                <span className="tag">Mobile Dev</span>
                <span className="tag">Open to Work</span>
              </div>
              <div className="profile-stack">
                {['Python', 'React', 'Django', 'Java', 'SQL'].map(t => (
                  <span key={t} className="stack-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-inner">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <div className="section-label">What I Do</div>
          <h2 className="section-title">Building for the web,<br />driven by data</h2>
          <p className="section-sub">
            I combine full-stack development skills with data science knowledge to build
            solutions that are both functional and intelligent.
          </p>

          <div className="highlights-grid">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div key={title} className="highlight-card">
                <div className="highlight-icon">{icon}</div>
                <h3 className="highlight-title">{title}</h3>
                <p className="highlight-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2 className="cta-title">Ready to work together?</h2>
            <p className="cta-sub">I'm actively looking for software development opportunities.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Let's Talk <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn btn-outline cta-outline">
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}