import React from "react";
import "./qualification.css";
const Qualification = () => {
	return (
		<section className="qualification section" id="qualification">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Personal Journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div className="qualification__button qualification__active button--flex">
						<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
						Education
					</div>
					<div className="qualification__button qualification__active button--flex">
						<i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div className="qualification__content qualification__content-active">
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Information Technology</h3>
								<span className="qualification__subtitle">
									Debremarkos University - Ethiopia
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2018 - 2022
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
								<h3 className="qualification__title">Full Stack Developer</h3>
								<span className="qualification__subtitle">
									Biruh Culture PLC
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> Jun 2023 - Aug 2023
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Full Stack Web Development
								</h3>
								<span className="qualification__subtitle">
									Microverse - Remote (SanFransisco)
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2022 - 2023
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
								<h3 className="qualification__title">Full Stack Developmer</h3>
								<span className="qualification__subtitle">
									YeHiywet Kal Ministry (Remote)
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2023 - Present
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
