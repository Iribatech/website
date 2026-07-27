import { useRef, useState } from 'react'

const INFO = [
  {
    icon: 'bi-geo-alt-fill',
    accent: '#3b82f6',
    label: 'Our Address',
    value: 'Norrsken House, 1 KN 78 St, Kigali, Rwanda',
  },
  {
    icon: 'bi-telephone-fill',
    accent: '#10b981',
    label: 'Call Us',
    value: '+250 786 091 893',
  },
  {
    icon: 'bi-envelope-fill',
    accent: '#8b5cf6',
    label: 'Email Us',
    value: 'info@iribatech.com',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('sent')
      formRef.current?.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="section-title text-center" data-reveal>
          <h2>Contact</h2>
          <p>Let's build something great together</p>
        </div>

        {/* Info cards */}
        <div className="row gy-4 mb-5" data-reveal data-reveal-delay="50">
          {INFO.map(item => (
            <div key={item.label} className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <div
                  className="contact-info-icon"
                  style={{ background: `${item.accent}18`, border: `1.5px solid ${item.accent}44` }}
                >
                  <i className={`bi ${item.icon}`} style={{ color: item.accent }} />
                </div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="contact-map mb-5" data-reveal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5085877745256!2d30.059442!3d-1.9535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6d9d28b1b55%3A0x6a4ea63e9cf10d7e!2sNorrsken%20Kigali%20House!5e0!3m2!1sen!2srw!4v1706000000000!5m2!1sen!2srw"
            title="IribaTech — Norrsken House Kigali"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Form */}
        <div className="row justify-content-center" data-reveal data-reveal-delay="100">
          <div className="col-lg-8">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="row gy-3">
                <div className="col-md-6">
                  <label className="contact-label">Full Name</label>
                  <input type="text" name="name" placeholder="e.g. Jane Doe" required />
                </div>
                <div className="col-md-6">
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="col-12">
                  <label className="contact-label">Subject</label>
                  <input type="text" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="col-12">
                  <label className="contact-label">Message</label>
                  <textarea name="message" rows={6} placeholder="Tell us a bit more…" required />
                </div>
                <div className="col-12 text-center">
                  {status === 'loading' && (
                    <p className="contact-status loading">Sending your message…</p>
                  )}
                  {status === 'sent' && (
                    <p className="contact-status sent">Message sent — we'll be in touch soon!</p>
                  )}
                  {status === 'error' && (
                    <p className="contact-status error">Something went wrong. Please try again.</p>
                  )}
                  <button type="submit" className="contact-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                    {status !== 'loading' && <i className="bi bi-send ms-2" />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
