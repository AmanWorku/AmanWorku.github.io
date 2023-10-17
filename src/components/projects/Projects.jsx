import React, { useState } from 'react';
import "./projects.css";
import serviceData from './projectsData';

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const renderedprojects = serviceData.map((service) => (
    <div className="projects__content" key={service.id} 
    // style={{ backgroundImage: `linear-gradient(0deg, rgba(210,210,210,0.5) 0%, rgba(190,190,190,1) 100%), url(${service.image})`}}
    >
      
      <div>
      <div className="uil uil-web-grid projects__icon">
        <h3 className="projects__title">{service.title}</h3>
      </div>
      <span className="projects__button" onClick={() => toggleTab(service.id)}> View More 
                <i className='uil uil-arrow-right projects__button-icon'></i></span>
                <div className={toggleState === service.id ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="projects__modal-title">{service.title}</h3>
                        <div className="projects__modal-image">
                            <img src={service.image} alt="" />
                        </div>
                        <p className="projects__modal-description">
                           {service.description}
                        </p>
                        <div className="projects__modal-buttons">
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
    <section className="projects section" id="projects">
     <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">What I've Done</span>

    <div className="projects__container container grid">
      {renderedprojects}
    </div>
   </section>
  );
};

export default Projects;

