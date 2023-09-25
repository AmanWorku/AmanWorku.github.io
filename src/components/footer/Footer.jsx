import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"> Aman</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                    <a href="#portfolio" className="footer__link">Projects</a>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            
            <div className="footer__social">
                <a href="https://instagram.com/amanwtsegaw" className="home__social-icon" target='_blank'>
                <i className='uil uil-instagram'></i>
                </a>
                <a href="https://github.com/" className="home__social-icon" target='_blank'>
                <i className='uil uil-github-alt'></i>
                </a>
                <a href="https://linkedin.com/" className="home__social-icon" target='_blank'>
                <i className='uil uil-linkedin'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer