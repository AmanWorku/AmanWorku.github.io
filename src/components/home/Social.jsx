import React from 'react'

const Social = () => {
  return (
    <div className="home__social"> 
        <a href="https://instagram.com/" className="home__social-ico n" target='_blank'>
            <i className='uil uil-instagram'></i>
        </a>
        <a href="https://github.com/" className="home__social-icon" target='_blank'>
        <i className='uil uil-github-alt'></i>
        </a>
        <a href="https://linkedin.com/" className="home__social-icon" target='_blank'>
        <i className='uil uil-linkedin'></i>
        </a>
    </div>
  )
}

export default Social