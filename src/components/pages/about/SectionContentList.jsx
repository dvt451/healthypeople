import React from 'react'
import { FaPlus } from "react-icons/fa";

export default function SectionContentList() {
	const AboutPagelist = [
		{
			title: 'Compassion: ',
			text: 'Treating every patient with empathy, dignity, and respect',
		},
		{
			title: 'Innovation: ',
			text: 'Embracing advanced technologies and treatment methods',
		},
		{
			title: 'Excellence: ',
			text: 'Maintaining the highest standards in medical care and service',
		},
		{
			title: 'Integrity: ',
			text: 'Practicing transparency and ethical medical care',
		},
		{
			title: 'Community: ',
			text: 'Serving as an active partner in community health and wellness',
		},
	]
	return (
		<section className='about-page__section about-page-section about-page-section-list'>
			<div className="about-page-section__container">
				<h2 className="about-page-section__title section-title-2">
					Our Mission
				</h2>
				<div className='about-page-section__content'>
					<div className="about-page-section__column">
						<p className="about-page-section__text">
							To provide exceptional, patient-centered healthcare that improves the quality of life for every individual we serve, through clinical excellence, innovative treatments, and compassionate care.
						</p>
					</div>
					<div className="about-page-section__column">
						<div className='about-page-section__frame'>
							<p className="about-page-section__text">
								To provide exceptional, patient-centered healthcare that improves the quality of life for every individual we serve, through clinical excellence, innovative treatments, and compassionate care.
							</p>
							<ul className="about-page-section__list">
								{
									AboutPagelist.map((item, i) => {
										return <li key={i} className="about-page-section-list__item">
											<FaPlus /><p><span>{item.title}</span>{item.text}</p>
										</li>
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
