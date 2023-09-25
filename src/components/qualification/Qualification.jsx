import React from 'react'
import "./qualification.css"
const Qualification = () => {
  return (
   <section className="qualification section">
     <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personal Journey</span>

    <div className="qualification__container container">
        <div className="qualification_tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon">
                </i>{" "} Education
            </div>
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-briefcase-alt qualification__icon">
                </i>{" "} Experience
            </div>
        
        </div>
    </div>
   </section>
  )
}

export default Qualification