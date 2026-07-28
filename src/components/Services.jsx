import { useState, useEffect } from 'react'

const services = [
  {
    icon: 'bi-card-list',
    title: 'Tech Trainings',
    desc: 'Empowering individuals with hands-on training in software development, Web3 technologies, and IT.',
    details: 'Our training programs are designed for beginners and professionals alike. We bridge the gap between theory and real-world skills through project-based learning, mentorship, and industry-relevant curriculum.',
    features: [
      'Web & Mobile Development Bootcamps',
      'Web3 & Blockchain Fundamentals',
      'UI/UX Design Essentials',
      'Database & Cloud Computing',
      'Cybersecurity Awareness',
      'Personalized mentorship and career support',
    ],
    col: 'col-lg-4 col-md-6',
    delay: 0,
  },
  {
    icon: 'bi-gem',
    title: 'Software Development',
    desc: 'Building scalable and robust software solutions tailored to meet your business needs.',
    details: 'From concept to deployment, we craft custom software that solves real business problems. Our team follows agile methodologies to deliver high-quality products on time and within budget.',
    features: [
      'Custom Web Application Development',
      'Mobile Apps (iOS & Android)',
      'API Design & Integration',
      'E-commerce Platforms',
      'SaaS Product Development',
      'Ongoing maintenance & feature updates',
    ],
    col: 'col-lg-4 col-md-6',
    delay: 100,
  },
  {
    icon: 'bi-fullscreen-exit',
    title: 'Tech Advisory',
    desc: 'Providing expert guidance to help you navigate the ever-changing tech landscape.',
    details: 'We help startups and enterprises make smart technology decisions. Our advisors bring deep industry experience to ensure your tech strategy aligns with your business goals and long-term vision.',
    features: [
      'Technology Stack Selection',
      'Digital Transformation Roadmaps',
      'Product Strategy & Ideation',
      'CTO-as-a-Service',
      'Startup Technical Due Diligence',
      'Team structure & hiring guidance',
    ],
    col: 'col-lg-4 col-md-6',
    delay: 200,
  },
  {
    icon: 'bi-bullseye',
    title: 'IT Support & Maintenance',
    desc: 'Offering comprehensive IT support ensuring your systems run smoothly and your business stays operational.',
    details: 'We provide reliable, round-the-clock IT support to keep your infrastructure healthy. From troubleshooting to proactive monitoring, we handle the technical side so you can focus on your business.',
    features: [
      '24/7 Remote Technical Support',
      'Server & Infrastructure Management',
      'Software Updates & Security Patches',
      'Data Backup & Disaster Recovery',
      'Network Configuration & Monitoring',
      'Help Desk & Ticketing System',
    ],
    col: 'col-lg-4 col-md-6 offset-lg-2',
    delay: 100,
  },
  {
    icon: 'bi-binoculars',
    title: 'Tech Consultancy',
    desc: 'Delivering innovative strategies and practical advice to leverage the latest technologies for growth.',
    details: 'Our consultants work alongside your team to identify opportunities, solve complex technical challenges, and implement solutions that drive measurable results and competitive advantage.',
    features: [
      'Business Process Automation',
      'Cloud Migration & Optimization',
      'AI & Data Analytics Integration',
      'Vendor Selection & Procurement',
      'Compliance & Security Audits',
      'KPI-driven implementation plans',
    ],
    col: 'col-lg-4 col-md-6',
    delay: 200,
  },
]

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="service-modal-backdrop" onClick={onClose}>
      <div className="service-modal" onClick={e => e.stopPropagation()}>
        <button className="service-modal-close" onClick={onClose} aria-label="Close">
          <i className="bi bi-x-lg" />
        </button>

        <div className="service-modal-icon">
          <i className={`bi ${service.icon}`} />
        </div>

        <h3 className="service-modal-title">{service.title}</h3>
        <p className="service-modal-desc">{service.details}</p>

        <h4 className="service-modal-features-heading">What's included</h4>
        <ul className="service-modal-features">
          {service.features.map(f => (
            <li key={f}>
              <i className="bi bi-check2-circle" />
              {f}
            </li>
          ))}
        </ul>

        <button className="service-modal-cta" onClick={onClose}>
          Get in touch
          <i className="bi bi-arrow-right ms-2" />
        </button>
      </div>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <h2>Services</h2>
          <p>What we offer</p>
        </div>

        <div className="row gy-4">
          {services.map(s => (
            <div key={s.title} className={s.col} data-reveal data-reveal-delay={s.delay}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button
                  className="service-learn-more"
                  onClick={() => setActive(s)}
                >
                  Learn more <i className="bi bi-arrow-right" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  )
}
