import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">ZS</span>
          <div>
            <p className="footer-name">Zubenathi Samkile</p>
            <p className="footer-role">Software Developer · DUT Graduate</p>
          </div>
        </div>

        <nav className="footer-links">
          {[['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'],
            ['/projects', 'Projects'], ['/experience', 'Experience'],
            ['/certifications', 'Certifications'], ['/contact', 'Contact']
          ].map(([to, label]) => (
            <Link key={to} to={to} className="footer-link">{label}</Link>
          ))}
        </nav>

        <div className="footer-social">
          <a href="https://github.com/ZUBENATHI-SAMKILE" target="_blank" rel="noreferrer" className="social-btn">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/zubenathi-samkile" target="_blank" rel="noreferrer" className="social-btn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:samkilezubenathi@gmail.com" className="social-btn">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zubenathi Samkile. All rights reserved.</p>
      </div>
    </footer>
  )
}