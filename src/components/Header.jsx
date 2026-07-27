import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(target)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top${scrolled ? ' scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1 className="sitename">IribaTech</h1>
        </a>

        <nav id="navmenu" className={`navmenu${menuOpen ? ' mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className="active" onClick={e => handleNavClick(e, '#hero')}>Home</a></li>
            <li><a href="#about" onClick={e => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#services" onClick={e => handleNavClick(e, '#services')}>Services</a></li>
            <li><a href="#contact" onClick={e => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMenuOpen(o => !o)}
          />
        </nav>

      </div>
    </header>
  )
}
