import React from 'react'
import { generalInfo } from '../../config'

export default function SectionContent() {
	return (
		<section className='about-page__section about-page-section'>
			<div className="about-page-section__container">
				<h2 className="about-page-section__title section-title-2">
					Our Journey of Healing
				</h2>
				<div className='about-page-section__content'>
					<div className="about-page-section__column">
						<p className="about-page-section__text">
							Founded in 1998, {generalInfo.brandName} began as a small community clinic with a simple mission: to make quality healthcare accessible to everyone. What started with just 10 beds and a handful of dedicated staff has grown into a comprehensive medical center serving over 50,000 patients annually.
						</p>

					</div>
					<div className="about-page-section__column">
						<p className="about-page-section__text">
							Through decades of service, we've remained committed to our core values while continuously evolving to meet the changing healthcare needs of our community. Our expansion has been guided by one constant principle: every patient deserves compassionate, expert care.
						</p>
					</div>
				</div>

			</div>
		</section>
	)
}
