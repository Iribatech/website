const services = [
  { icon: 'bi-card-list',       label: 'Tech Trainings',           delay: '0.3s'  },
  { icon: 'bi-binoculars',      label: 'Software Development',     delay: '0.45s' },
  { icon: 'bi-fullscreen-exit', label: 'Tech Advisory',            delay: '0.6s'  },
  { icon: 'bi-bullseye',        label: 'IT support & Maintenance', delay: '0.75s' },
  { icon: 'bi-gem',             label: 'Tech Consultancy',         delay: '0.9s'  },
]

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background hero-gradient">
      <div className="container">
        <div className="row justify-content-center text-center hero-headline">
          <div className="col-xl-7 col-lg-9">
            <h2>Center for Tech Knowledge<span>.</span></h2>
            <p>Empowering businesses and individuals with innovative tech solutions and expert training.</p>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center">
          {services.map(s => (
            <div
              key={s.label}
              className="col-xl-2 col-md-4 hero-service-item"
              style={{ animationDelay: s.delay }}
            >
              <div className="icon-box">
                <i className={`bi ${s.icon}`} />
                <h3>{s.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
