import { useState } from 'react'
import { Award, ExternalLink, X, ChevronDown, ChevronUp } from 'lucide-react'


const CERTS = [
  {
    title: 'Bachelor of Information and Communication Technology',
    issuer: 'Durban University of Technology',
    year: '2025',
    type: 'Degree',
    color: 'blue',
    desc: 'Completed a full 4-year Bachelor\'s degree in ICT, covering software development, data science, networking, and systems design.',
    image: null,
  },
   {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2025',
    type: 'Cloud',
    color: 'orange',
    desc: 'Professional-level certification covering cloud fundamentals, security, and cost optimization.',
    image: '/certs/aws-cloud-practitioner.jpg',
  },
   {
    title: 'Meta Frontend Developer Certification',
    issuer: 'Coursera / Meta',
    year: '2026',
    type: 'Frontend',
    color: 'blue',
    desc: 'Advanced React patterns, performance, and testing methodologies.',
    image: '/certs/meta-frontend.jpg',
  },
  {
  title: 'Data Science & Analytics',
  issuer: 'HP LIFE / HP Foundation',
  year: '2026',
  type: 'Data Science',
  color: 'purple',
  desc: 'Introduction to data science concepts, data-driven decision making, and analytics for business.',
  image: '/certs/hp-data-science.jpg',
  },
  {
    title: 'Fullstack Web Development',
    issuer: 'FNB App Academy',
    year: '2025',
    type: 'Full Stack',
    color: 'green',
    desc: 'Completed FNB App Academy\'s fullstack web development program covering frontend, backend, and deployment.',
    image: '/certs/fullstack-fnb.jpg',
  },
  {
    title: 'Java Foundations Associate Badge',
    issuer: 'Oracle',
    year: '2026',
    type: 'Badge',
    color: 'orange',
    desc: 'Digital badge validating foundational knowledge of Java programming, OOP concepts, and core syntax.',
    image: '/certs/oracle-java-foundations.jpg',
  },
  {
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    year: '2025',
    type: 'Data Science',
    color: 'green',
    desc: 'Completed Kaggle\'s hands-on machine learning course covering model training, validation, and key ML concepts using Python.',
    image: '/certs/machine-learning-kaggle.jpg',
  },
  {
    title: 'Python Libraries for Data Science',
    issuer: 'Simplilearn SkillUp',
    year: '2025',
    type: 'Data Science',
    color: 'purple',
    desc: 'Certification covering essential Python libraries for data science including Pandas, NumPy, Matplotlib, and Seaborn.',
    image: '/certs/python-data-science-simplilearn.jpg',
  },
  
  
 
  
]

const COLOR_MAP = {
  blue:   { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', badge: '#2563eb' },
  green:  { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d', badge: '#16a34a' },
  purple: { bg: '#faf5ff', border: '#e9d5ff', text: '#7e22ce', badge: '#9333ea' },
  orange: { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c', badge: '#ea580c' },
  teal:   { bg: '#f0fdfa', border: '#99f6e4', text: '#0f766e', badge: '#0d9488' },
}

export default function Certifications() {
  const [preview, setPreview] = useState(null) 

  return (
    <main>
      <section className="section ct-top">
        <div className="container">
          <div className="label">Certifications</div>
          <h1 className="page-title">Qualifications &amp;<br />Achievements</h1>
          <p className="page-sub">
            Academic qualifications and industry certifications earned through study at DUT,
            online platforms, and professional training programmes.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="ct-grid">
            {CERTS.map((cert) => {
              const { title, issuer, year, type, color, desc, image } = cert
              const c = COLOR_MAP[color]
              return (
                <div key={title} className="ct-card">
                  <div className="ct-icon" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                    <Award size={26} color={c.badge} />
                  </div>
                  <div className="ct-body">
                    <div className="ct-meta">
                      <span className="ct-type" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                        {type}
                      </span>
                      <span className="ct-year">{year}</span>
                    </div>
                    <h3 className="ct-title">{title}</h3>
                    <p className="ct-issuer">{issuer}</p>
                    <p className="ct-desc">{desc}</p>

                    {/* Open Certificate button */}
                    {image && (
                      <button
                        className="ct-open-btn"
                        onClick={() => setPreview(cert)}
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certificate Preview Modal */}
      {preview && (
        <div className="ct-modal-overlay" onClick={() => setPreview(null)}>
          <div className="ct-modal" onClick={e => e.stopPropagation()}>
            <div className="ct-modal-header">
              <div>
                <h3 className="ct-modal-title">{preview.title}</h3>
                <p className="ct-modal-issuer">{preview.issuer} · {preview.year}</p>
              </div>
              <button className="ct-modal-close" onClick={() => setPreview(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="ct-modal-body">
              <img
                src={preview.image}
                alt={`${preview.title} certificate`}
                className="ct-modal-img"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="ct-modal-placeholder" style={{ display: 'none' }}>
                <Award size={48} color="#d1d5db" />
                <p>Certificate image not found.<br />Place it in <code>public/certs/</code></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}