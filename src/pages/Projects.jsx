import { useState } from 'react'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'




const PROJECTS = [
  
  {
    title: 'Library Management System',
    desc: 'Full-stack Library Management System with role-based access for Admin, Librarian, and Member. Features book management, borrowings with auto-fine calculation, reservations, and a dedicated member portal.',
    tags: ['Django', 'React', 'PostgreSQL', 'JWT', 'REST API'],
    type: 'Full Stack',
    color: 'blue',
    featured: true,
    highlights: [
      '3-tier role system (Admin / Librarian / Member)',
      'Auto fine calculation on overdue returns',
      'Member self-registration portal',
      'Dual JWT authentication for staff and members',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/library-frontend.git',
    live: 'https://library-frontend-5v29f2x35-zubenathis-projects.vercel.app',
  },
  {
    title: 'Movie Tracker',
    desc: 'A movie tracking web application that lets users search for movies, mark them as watched or to-watch, write reviews, and manage their personal movie collection with a clean modern UI.',
    tags: ['React', 'JavaScript', 'REST API', 'CSS3'],
    type: 'Full Stack',
    color: 'orange',
    featured: true,
    highlights: [
      'Search movies via external API',
      'Mark movies as watched / to-watch',
      'Write personal reviews and ratings',
      'Personal movie collection dashboard',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/cinetrack-frontend.git',
    live: 'https://cinetrack-frontend.vercel.app/',
  },
  {
    title: 'Data Analysis & ML App',
    desc: 'Full-stack Machine Learning web application that allows users to upload datasets, perform automated exploratory data analysis (EDA), and train machine learning models with beautiful visualizations. Deployed on Render backend and GitHub Pages for frontend.',
    tags: ['Flask (Python)', 'React', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    type: 'ML / Full Stack',
    color: 'purple',
    featured: true,
    highlights: [
      'Upload datasets and run automated EDA',
      'Train machine learning models in the browser',
      'Beautiful visualizations with Matplotlib & Seaborn',
      'Flask backend on Render, frontend on GitHub Pages',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/data_analysis_ml_app.git',
    live: 'https://ZUBENATHI-SAMKILE.github.io/data_analysis_ml_app/',
  },
  {
    title: 'Telemedicine Web App',
    desc: 'A telemedicine web application built with Flask and React that allows patients to book appointments, consult with doctors via video calls, and manage their health records online. Includes a chatbot for instant patient support.',
    tags: ['Flask (Python)', 'React', 'WebRTC', 'RESTful APIs', 'Tailwind CSS'],
    type: 'Full Stack',
    color: 'teal',
    featured: true,
    highlights: [
      'Book doctor appointments online',
      'Video consultations via WebRTC',
      'Patient health records management',
      'AI chatbot for instant patient support',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/Telemedicine-App.git',
    live: 'https://telemedicine-frontend-a9rcl4ya1-zubenathis-projects.vercel.app',
  },
  {
    title: 'Doctor Appointment System',
    desc: 'Frontend application for booking and managing doctor appointments. Built with React components, state management with hooks, and a clean responsive UI.',
    tags: ['React', 'JavaScript', 'CSS3', 'Hooks'],
    type: 'Frontend',
    color: 'green',
    featured: false,
    highlights: [
      'Appointment booking and scheduling UI',
      'Doctor profile listings',
      'Responsive mobile-first design',
      'React hooks for state management',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/Doc-Appointment-frontend.git',
    live: 'https://zubenathi-samkile.github.io/Doc-Appointment-frontend/',
  },
  {
    title: 'Video Vault',
    desc: 'A video management and storage web application built with Python Flask and SQLite. Users can upload, organize, and browse video content with secure authentication.',
    tags: ['Flask', 'Python', 'SQLite', 'JavaScript'],
    type: 'Full Stack',
    color: 'red',
    featured: false,
    highlights: [
      'Video upload and storage system',
      'User authentication with bcrypt',
      'Organized video browsing interface',
      'Flask REST backend',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/videovault.git',
    live: 'https://www-videovault-zs.onrender.com',
  },
  {
    title: 'Book Store',
    desc: 'Online bookstore application built with Flask and SQLite, featuring product listings, a shopping system, and admin management for inventory.',
    tags: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS'],
    type: 'Full Stack',
    color: 'gray',
    featured: false,
    highlights: [
      'Book catalog and search',
      'Shopping cart system',
      'Admin dashboard for inventory',
      'Responsive design',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/BOOK-STORE-APP.git',
    live: 'https://book-store-app-6.onrender.com',
  },
  {
    title: "Dictionary App System",
    desc: "A user friendly dictionary application built with React that allows users to search for word definitions, and pronunciation using the Free Dictionary API. Features include a clean interface, responsive design, and real-time search functionality. also allows users to save favorite words for quick access later.",
    tags: ["React", " Free Dictionary API","JavaScript", "HTML", "CSS"],
    type: 'Frontend',
    color: 'green',
    featured: false,
    highlights: [
      'Search word definitions using Free Dictionary API',
      'Displays phonetics and pronunciation',
      'Save favorite words for quick access',
      'Responsive and clean React UI',
    ],
    live: "https://ZUBENATHI-SAMKILE.github.io/dictionary-app",
    github: "https://github.com/ZUBENATHI-SAMKILE/dictionary-app.git",
   
  },
  {
    title: "Android Calculator App",
    desc: "A simple and intuitive calculator application for Android devices built using Java and Android Studio. It features basic arithmetic operations, a clean user interface, and responsive design for seamless usability across various screen sizes. Deployed as an APK file for easy installation on Android smartphones and tablets.",
    tags: ["Java", "Material Design", "Android Studio", "XML" ],
    type: 'Full Stack',
    color: 'gray',
    featured: false,
    highlights: [
      'Performs basic arithmetic operations',
      'Built with Java and Android Studio',
      'Material Design user interface',
      'APK build for installation on Android devices',
    ],
    live: "https://github.com/ZUBENATHI-SAMKILE/CalculatorApp-Android/releases",
    github: "https://github.com/ZUBENATHI-SAMKILE/CalculatorApp-Android.git",
    
  },
  {
    title: 'Attendance System',
    desc: 'Group project a student attendance tracking system built with Flask and MySQL, allowing lecturers to mark and track student attendance with reports.',
    tags: ['Flask', 'MySQL', 'Python', 'Bootstrap'],
    type: 'Group Project',
    color: 'red',
    featured: false,
    highlights: [
      'Lecturer and student portals',
      'Attendance marking and tracking',
      'Attendance reports generation',
      'Group collaboration project',
    ],
    github: 'https://github.com/ZUBENATHI-SAMKILE/attendance-system.git',
    live: '#',
  },
]

const COLOR_MAP = {
  blue:   { bg: '#eff6ff', border: '#bfdbfe', badge: '#2563eb' },
  green:  { bg: '#f0fdf4', border: '#bbf7d0', badge: '#16a34a' },
  purple: { bg: '#faf5ff', border: '#e9d5ff', badge: '#9333ea' },
  orange: { bg: '#fff7ed', border: '#fed7aa', badge: '#ea580c' },
  red:    { bg: '#fef2f2', border: '#fecaca', badge: '#dc2626' },
  teal:   { bg: '#f0fdfa', border: '#99f6e4', badge: '#0d9488' },
  gray:   { bg: '#f9fafb', border: '#e5e7eb', badge: '#6b7280' },
}

function ProjectCard({ title, desc, tags, type, color, highlights, github, live }) {
  const c = COLOR_MAP[color]
  return (
    <div className="project-card">
      <div className="project-card-header" style={{ background: c.bg, borderBottom: `1px solid ${c.border}` }}>
        <span className="project-type" style={{ background: c.badge, color: '#fff' }}>{type}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
      </div>
      <div className="project-card-body">
        <ul className="project-highlights">
          {highlights.map(h => (
            <li key={h}><span className="highlight-dot" />{h}</li>
          ))}
        </ul>
        <div className="project-tags">
          {tags.map(t => <span key={t} className="tag tag-blue">{t}</span>)}
        </div>
        <div className="project-actions">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            <Github size={15} /> View Code
          </a>
          <a href={live} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = PROJECTS.slice(0, 6)
  const moreProjects = PROJECTS.slice(6)

  return (
    <main>
      <section className="section projects-hero">
        <div className="container">
          <div className="label">Projects</div>
          <h1 className="page-title">Things I've Built</h1>
          <p className="page-sub">
            A collection of projects spanning full-stack development, machine learning,
            data science, and mobile development from solo builds to group collaborations.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">

          {/* First 6 Projects */}
          <div className="projects-grid">
            {visibleProjects.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>

          {/* View More / Less button */}
          <div className="view-more-wrap">
            <button
              className={`view-more-btn ${showAll ? 'open' : ''}`}
              onClick={() => setShowAll(v => !v)}
            >
              {showAll
                ? <><ChevronUp size={18} /> Show Less</>
                : <><ChevronDown size={18} /> View More Projects ({moreProjects.length})</>
              }
            </button>
          </div>

          {/* Extra projects */}
          {showAll && (
            <div className="projects-grid more-grid">
              {moreProjects.map(p => <ProjectCard key={p.title} {...p} />)}
            </div>
          )}

        </div>
      </section>
    </main>
  )
}