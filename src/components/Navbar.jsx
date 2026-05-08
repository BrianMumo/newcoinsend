import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoSvg from '../assets/images/logo.svg'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  const navLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/rates', label: 'Rates' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="Coinsend Home">
          <img src={logoSvg} alt="Coinsend" className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <Link to="/coming-soon" className="btn-download-mobile">Download the app</Link>
          </li>
        </ul>

        <Link to="/coming-soon" className="navbar__cta" id="download-cta">
          <span>Download the app</span>
          <div className="navbar__cta-icons">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.49 4.7 9.39C5.56 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
          </div>
        </Link>

        <button className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" id="menu-toggle">
          <span></span><span></span><span></span>
        </button>
      </div>
      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  )
}
