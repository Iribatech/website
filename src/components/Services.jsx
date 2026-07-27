const services = [
  {
    icon: 'bi-card-list',
    title: 'Tech Trainings',
    desc: 'Empowering individuals with hands-on training in software development, Web3 technologies, and IT, bridging the gap between theory and real-world skills.',
    col: 'col-lg-4 col-md-6',
    delay: 0,
  },
  {
    icon: 'bi-gem',
    title: 'Software Development',
    desc: 'Building scalable and robust software solutions tailored to meet your business needs, from concept to deployment and beyond.',
    col: 'col-lg-4 col-md-6',
    delay: 100,
  },
  {
    icon: 'bi-fullscreen-exit',
    title: 'Tech Advisory',
    desc: 'Providing expert guidance to help you navigate the ever-changing tech landscape, ensuring strategic alignment and optimal results.',
    col: 'col-lg-4 col-md-6',
    delay: 200,
  },
  {
    icon: 'bi-bullseye',
    title: 'IT Support & Maintenance',
    desc: 'Offering comprehensive IT support and maintenance services, ensuring your systems run smoothly and your business stays operational.',
    col: 'col-lg-4 col-md-6 offset-lg-2',
    delay: 100,
  },
  {
    icon: 'bi-binoculars',
    title: 'Tech Consultancy',
    desc: 'Delivering innovative strategies and practical advice to help you leverage the latest technologies for business growth and digital transformation.',
    col: 'col-lg-4 col-md-6',
    delay: 200,
  },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <h2>Services</h2>
          <p>What we offer</p>
        </div>

        <div className="row gy-4">
          {services.map(s => (
            <div
              key={s.title}
              className={s.col}
              data-reveal
              data-reveal-delay={s.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
