import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Loader } from 'lucide-react'

const SERVICE_ID  = 'service_React2025'
const TEMPLATE_ID = 'contact_template'
const PUBLIC_KEY  = 'bVNltusSPa3-UoPEu'

export default function Contact() {
  const formRef = useRef()
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg]   = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    setErrMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrMsg('Something went wrong. Please try emailing me directly at samkilezubenathi@gmail.com')
      setStatus('error')
    }
  }

  return (
    <main>
      <section className="section co-top">
        <div className="container">
          <div className="label">Contact</div>
          <h1 className="page-title">Let's Work Together</h1>
          <p className="page-sub">
            I'm actively looking for software development opportunities in South Africa and remotely.
            Whether you have a job opening, a project idea, or just want to connect - reach out!
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container co-layout">

          {/* Left Info */}
          <div className="co-info">
            <h3 className="co-info-title">Get In Touch</h3>
            <p className="co-info-sub">
              I respond within 24 hours. Available for full-time roles,
              freelance projects, and collaborations.
            </p>

            <div className="co-details">
              <a href="mailto:samkilezubenathi@gmail.com" className="co-item">
                <div className="co-item-icon"><Mail size={17} /></div>
                <div>
                  <span className="co-lbl">Email</span>
                  <span className="co-val">samkilezubenathi@gmail.com</span>
                </div>
              </a>
              <a href="tel:0638998683" className="co-item">
                <div className="co-item-icon"><Phone size={17} /></div>
                <div>
                  <span className="co-lbl">Phone</span>
                  <span className="co-val">063 899 8683</span>
                </div>
              </a>
              <div className="co-item">
                <div className="co-item-icon"><MapPin size={17} /></div>
                <div>
                  <span className="co-lbl">Location</span>
                  <span className="co-val">Eastern Cape, South Africa</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/zubenathi-samkile" target="_blank" rel="noreferrer" className="co-item">
                <div className="co-item-icon"><Linkedin size={17} /></div>
                <div>
                  <span className="co-lbl">LinkedIn</span>
                  <span className="co-val">linkedin.com/in/zubenathi-samkile</span>
                </div>
              </a>
              <a href="https://github.com/ZUBENATHI-SAMKILE" target="_blank" rel="noreferrer" className="co-item">
                <div className="co-item-icon"><Github size={17} /></div>
                <div>
                  <span className="co-lbl">GitHub</span>
                  <span className="co-val">github.com/ZUBENATHI-SAMKILE</span>
                </div>
              </a>
            </div>

            <div className="co-avail">
              <span className="avail-dot" />
              Open to Work - Available immediately
            </div>
          </div>

          {/*Right Form*/}
          <div className="co-form-wrap">
            {status === 'success' ? (
              <div className="co-success">
                <CheckCircle size={48} color="#16a34a" />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out! Your message has been delivered directly
                  to my inbox. I'll get back to you within 24 hours.
                </p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} className="co-form" onSubmit={handleSubmit}>

                {status === 'error' && (
                  <div className="co-error">
                    ⚠️ {errMsg}
                  </div>
                )}

                <div className="co-row">
                  <div className="co-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="co-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="co-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration"
                  />
                </div>

                <div className="co-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark co-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><Loader size={16} className="spin" /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}