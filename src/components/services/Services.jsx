import React, { useState } from 'react';
import "./services.css";
import serviceData from './serviceData';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const renderedServices = serviceData.map((service) => (
    <div className="services__content" key={service.id} style={{ backgroundImage: `url("${service.image}") !important`, backgroundSize: 'contain'}}>
      
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
                        <p className="services__modal-description">
                           {service.description}
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Webpage development.</p>
                            </li>
                        </ul>

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

