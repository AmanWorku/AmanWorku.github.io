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
        <div className="qualification__sections">
            <div className="qualification__content qualification-content-active">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Design</h3>
                        <span className="qualification__subtitle">Debremarkos University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                <div className="qualification__data">
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">React Developer</h3>
                        <span className="qualification__subtitle">Microverse</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - Present
                        </div>
                    </div>
                    
                </div>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">Biruh Culture PLC</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                <div className="qualification__data">
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">UX Expert</h3>
                        <span className="qualification__subtitle">Ezra Ministry</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - 2022
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification