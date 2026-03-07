import React from "react";
import {  GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'Bachelor of Information and Communication Technology',
    institution: 'Durban University of Technology (DUT)',
    period: '2023 — 2025',
    location: 'Durban, KwaZulu-Natal',
    description: 'Comprehensive ICT degree covering software development, data science, networking, and systems analysis. Developed strong foundations in both theoretical concepts and practical application.',
    highlights: [
      'Software Development (Web & Mobile)',
      'Data Science & Machine Learning',
      'Database Design & Management',
      'Systems Analysis & Design',
    ]
  },
]

const JOURNEY = [
  {
    step: '01',
    title: 'HTML, CSS & C#',
    period: 'Year 1',
    desc: 'Built foundational web skills. Completed a group Restaurant Website project.',
    tags: ['HTML5', 'CSS3', 'C#', 'VS Code'],
  },
  {
    step: '02',
    title: 'React & Frontend Dev',
    period: 'Year 2',
    desc: 'Learned React components, props, state, and hooks. Built a Doctor Appointment frontend.',
    tags: ['React', 'JavaScript', 'Vite', 'React DevTools'],
  },
  {
    step: '03',
    title: 'Node.js & Backend Dev',
    period: 'Year 2–3',
    desc: 'Explored Node.js, Express, MongoDB, and REST APIs. Built authentication systems and weather apps.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    step: '04',
    title: 'Python Flask & SQL',
    period: 'Year 3',
    desc: 'Mastered Python Flask, SQLite, and MySQL. Built Attendance System, Book Store, and Video Vault.',
    tags: ['Python', 'Flask', 'SQLite', 'MySQL', 'bcrypt'],
  },
  {
    step: '05',
    title: 'Django & Full Stack',
    period: 'Year 3',
    desc: 'Advanced to Django REST Framework, PostgreSQL, and JWT authentication. Built LibraryMS.',
    tags: ['Django', 'PostgreSQL', 'JWT', 'React', 'DRF'],
  },
  {
    step: '06',
    title: 'Deployment & DevOps',
    period: 'Year 3',
    desc: 'Learning to deploy applications to production using Render, Git, and cloud platforms.',
    tags: ['Render', 'Git', 'GitHub', 'Vercel'],
  },
]

export default function Experience() {
  return (
    <main>
      <section className="section exp-hero">
        <div className="container">
          <div className="section-label">Experience</div>
          <h1 className="section-title">Education &<br />Learning Journey</h1>
          <p className="section-sub">
            My path from writing my first line of HTML to building full-stack
            systems with Django, React, and PostgreSQL.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container exp-layout">

          {/* Education Block */}
          <div>
            <h2 className="exp-section-heading">Education</h2>
            {EDUCATION.map(({ degree, institution, period, location, description, highlights }) => (
              <div key={degree} className="edu-card">
                <div className="edu-header">
                  <div className="edu-icon"><GraduationCap size={30} className="icon" /></div>
                  <div>
                    <h3 className="edu-degree">{degree}</h3>
                    <p className="edu-inst">{institution}</p>
                    <div className="edu-meta">
                      <span className="tag">{period}</span>
                      <span className="tag">{location}</span>
                    </div>
                  </div>
                </div>
                <p className="edu-desc">{description}</p>
                <div className="edu-highlights">
                  {highlights.map(h => (
                    <span key={h} className="tag tag-blue">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Journey Timeline */}
          <div>
            <h2 className="exp-section-heading">Learning Journey</h2>
            <div className="timeline">
              {JOURNEY.map(({ step, title, period, desc, tags }) => (
                <div key={step} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-step">{step}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{title}</h3>
                      <span className="timeline-period">{period}</span>
                    </div>
                    <p className="timeline-desc">{desc}</p>
                    <div className="timeline-tags">
                      {tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}