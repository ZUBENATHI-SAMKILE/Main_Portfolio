import React from "react"

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Vite', level: 75 },
    ]
  },
  {
    category: 'Backend',
    color: 'green',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Django / DRF', level: 82 },
      { name: 'Flask', level: 78 },
      { name: 'Node.js / Express', level: 72 },
    ]
  },
  {
    category: 'Database',
    color: 'purple',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 85 },
      { name: 'Firebase', level: 70 },
      { name: 'MongoDB', level: 68 },
    ]
  },
  {
    category: 'Data Science',
    color: 'orange',
    skills: [
      { name: 'Pandas / NumPy', level: 78 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Matplotlib / Seaborn', level: 75 },
      { name: 'TensorFlow', level: 60 },
    ]
  },
  {
    category: 'Mobile & Other',
    color: 'red',
    skills: [
      { name: 'Java (Android)', level: 72 },
      { name: 'C#', level: 65 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'REST APIs', level: 88 },
    ]
  },
]

const TOOLS = [
  'VS Code', 'Git', 'GitHub', 'Postman', 'Figma',
  'Android Studio', 'Jupyter Notebook', 'Supabase', 'Docker',
  'Render', 'Vite', 'npm', 'pip', 'Linux'
]

export default function Skills() {
  return (
    <main>
      <section className="section skills-hero">
        <div className="container">
          <div className="section-label">Skills</div>
          <h1 className="section-title">Technologies &<br />Expertise</h1>
          <p className="section-sub">
            A broad skill set built through academic study, personal projects,
            and hands-on development across web, mobile, and data domains.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="skills-grid">
            {SKILL_GROUPS.map(({ category, color, skills }) => (
              <div key={category} className={`skill-group skill-group-${color}`}>
                <h3 className="skill-group-title">{category}</h3>
                <div className="skill-bars">
                  {skills.map(({ name, level }) => (
                    <div key={name} className="skill-bar-item">
                      <div className="skill-bar-header">
                        <span className="skill-name">{name}</span>
                        <span className="skill-pct">{level}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ '--fill': `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="tools-section">
            <h3 className="tools-title">Tools & Platforms</h3>
            <div className="tools-grid">
              {TOOLS.map(tool => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}