import React, { useState } from 'react';
import "./services.css";
import serviceData from './serviceData';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const renderedServices = serviceData.map((service) => (
    <div className="services__content" key={service.id} style={{ backgroundImage: `linear-gradient(0deg, rgba(210,210,210,0.5) 0%, rgba(190,190,190,1) 100%), url(${service.image})`}}>
      
      <div>
      <div className="uil uil-web-grid services__icon">
        <h3 className="services__title">{service.title}</h3>
      </div>
      <span className="services__button" onClick={() => toggleTab(service.id)}> View More 
                <i className='uil uil-arrow-right services__button-icon'></i></span>
                <div className={toggleState === service.id ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">{service.title}</h3>
                        <div className="services__modal-image">
                            <img src={service.image} alt="" />
                        </div>
                        <p className="services__modal-description">
                           {service.description}
                        </p>
                        <div className="services__modal-buttons">
                        <a href={service.live_demo} className="button button-flex">
                            Live Demo  <i className="uil uil-link"></i>
                            </a>
                        <a href={service.source_link} className="button button-light">
                            Source Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  ));

  const toggleTab = (index) => {
    if (toggleState === index) {
      setToggleState(0);
    } else {
      setToggleState(index);
    }
  };

  return (
    <section className="services section" id="services">
     <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
      {renderedServices}
    </div>
   </section>
  );
};

export default Services;

