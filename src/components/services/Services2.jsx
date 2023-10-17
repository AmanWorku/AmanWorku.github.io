import React, { useState } from 'react';
import "./services.css";
import serviceData from './serviceData'; // Import the service data

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  // You can map through the serviceData array to render services dynamically
  const renderedServices = serviceData.map((service) => (
    <div className="services__content" key={service.id}>
      
      <div>
      <h3 className="services__title">{service.title}</h3>
      <p className="services__modal-description">{service.description}</p>
     
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
