import React from 'react';
import { User, GraduationCap, School, Phone, Mail, Linkedin, Github, MapPin, Code2, Database, Smartphone, Globe } from 'lucide-react';

const TECH = [
  { title: 'Languages', skills: 'Python, Java, C#, JavaScript, SQL', desc: 'Writing clean, efficient, and maintainable code across multiple programming languages.' },
  { title: 'Frameworks & Libraries', skills: 'React, Django, Node.js, Flask, Express', desc: 'Building scalable applications and secure RESTful APIs using modern frameworks.' },
  { title: 'Mobile Development', skills: 'Java (Android)', desc: 'Building intuitive, native mobile applications for Android platform.' },
  { title: 'Database & Cloud', skills: 'PostgreSQL, SQLite, Firebase, MongoDB', desc: 'Designing reliable data structures and efficient cloud deployment setups.' },
]

export default function About() {
  return (
    <main>
      <section className="section about-hero">
        <div className="container">
          <div className="section-label">About Me</div>
          <h1 className="section-title">Developer, problem-solver,<br /><em style={{fontStyle:'italic', color:'var(--accent-2)'}}>lifelong learner</em></h1>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container about-grid">

          {/* Personal Info */}
          <div className="about-sidebar">
            <div className="info-card">
              <div className="info-avatar">ZS</div>
              <h2 className="info-name">Zubenathi Samkile</h2>
              <p className="info-title">Software Developer</p>

              <ul className="info-list">
                <li><GraduationCap size={16} className="info-icon" /><div><span className="info-label">Qualification</span><span>Bachelor in ICT</span></div></li>
                <li><School size={16} className="info-icon" /><div><span className="info-label">University</span><span>Durban University of Technology</span></div></li>
                <li><Phone size={16} className="info-icon" /><div><span className="info-label">Phone</span><a href="tel:0638998683">063 899 8683</a></div></li>
                <li><Mail size={16} className="info-icon" /><div><span className="info-label">Email</span><a href="mailto:samkilezubenathi@gmail.com">samkilezubenathi@gmail.com</a></div></li>
                <li><Linkedin size={16} className="info-icon" /><div><span className="info-label">LinkedIn</span><a href="https://www.linkedin.com/in/zubenathi-samkile" target="_blank" rel="noreferrer">zubenathi-samkile</a></div></li>
                <li><Github size={16} className="info-icon" /><div><span className="info-label">GitHub</span><a href="https://github.com/ZUBENATHI-SAMKILE" target="_blank" rel="noreferrer">ZUBENATHI-SAMKILE</a></div></li>
                <li><MapPin size={16} className="info-icon" /><div><span className="info-label">Location</span><span>Eastern Cape, South Africa</span></div></li>
              </ul>
            </div>
          </div>

          {/* Bio + Tech */}
          <div className="about-main">
            <div className="bio-block">
              <h3 className="block-title">About Me</h3>
              <p>
                Software Developer with a Bachelor's Degree in ICT from Durban University of Technology (DUT).
                Skilled in backend development, API design, and AI-driven systems, with a strong focus on
                mobile-first and cloud-based applications.
              </p>
              <p>
                Experienced in Python, Java, React, Flask, and SQL, and passionate about building scalable,
                high-performance solutions that drive innovation and real-world impact. Eager to contribute
                to dynamic development teams and gain practical experience in the software industry.
              </p>
            </div>

            <h3 className="block-title" style={{marginTop: '2.5rem', marginBottom: '1.25rem'}}>Technical Expertise</h3>
            <div className="tech-grid">
              {TECH.map(({ title, skills, desc }) => (
                <div key={title} className="tech-card">
                  <h4 className="tech-title">{title}</h4>
                  <p className="tech-skills">{skills}</p>
                  <p className="tech-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}