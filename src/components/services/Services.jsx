import React from 'react'

const Services = () => {
  return (
   <section className="services section" id="services">
     <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <div className="uil uil services__icon">
                    <h3 className="services_-title"></h3>
                </div>
                <span className="services__button">View More
                <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className="service__modal">
                    
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services