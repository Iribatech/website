export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 align-items-center">

          <div className="col-lg-6 order-1 order-lg-2" data-reveal data-reveal-delay="100">
            <img src="/assets/img/iribatech_logo.png" className="img-fluid" alt="Iriba Tech Ltd Logo" />
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-reveal>
            <h3>Innovating the Future with Technology</h3>
            <p className="fst-italic">
              Iriba Tech Ltd is a leading technology company providing state-of-the-art solutions in software
              development, Web3 services, IT support, and digital transformation, with a strong focus on
              empowering individuals through technology training.
            </p>

            <h4><i className="bi bi-check2-all" /> Building Skills, Driving Innovation</h4>
            <p>
              Our training programs equip individuals with in-demand skills in software development, blockchain,
              and AI. We bridge the gap between theory and real-world application through hands-on learning.
            </p>

            <h4><i className="bi bi-check2-all" /> Reliable Solutions, Lasting Impact</h4>
            <p>
              We develop scalable software, provide Web3 integration, and offer IT support to businesses,
              ensuring smooth operations and sustainable digital transformation.
            </p>

            <h4><i className="bi bi-check2-all" /> Your Trusted Tech Partner</h4>
            <p>
              By leveraging innovation and expertise, we help businesses and individuals harness the power
              of technology for growth and efficiency. At Iriba Tech Ltd, we are committed to shaping the
              future of technology by fostering innovation and empowering the next generation of tech professionals.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
