export default function Footer() {
  const handleSubmit = (e) => e.preventDefault()

  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">IB</span>
              </a>
              <div className="footer-contact pt-3">
                <p>1 KN 78 St, Kigali</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+250 786 091 893</span></p>
                <p><strong>Email:</strong> <span>info@iribatech.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://x.com/Iribatech" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x" /></a>
                <a href="#"><i className="bi bi-facebook" /></a>
                <a href="#"><i className="bi bi-instagram" /></a>
                <a href="#"><i className="bi bi-linkedin" /></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">About us</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">Services</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right" /> <a href="#">Tech Trainings</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">Software Development</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">Tech Advisory</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">IT & Maintenance</a></li>
                <li><i className="bi bi-chevron-right" /> <a href="#">Tech Consultancy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form onSubmit={handleSubmit}>
                <div className="newsletter-form">
                  <input type="email" name="email" placeholder="Your email" required />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename">IribaTech</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
