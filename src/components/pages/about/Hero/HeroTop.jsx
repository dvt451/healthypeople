import React from 'react'
import VideoScreen from './VideoScreen'

export default function HeroTop() {
	return (
		<div className="hero__top">
			<div className="hero__column hero-content">

				<h1 className="hero-content__title section-title-1">
					We place people at the <span>epicentre</span> of
					healthcare
				</h1>
				<div className="hero-content__hero-image hero-image">
					<VideoScreen />
				</div>
				<div className="hero-content__sub-title about-page__hero-content-sub-title">
					For over 25 years, we have been dedicated to providing exceptional medical care to our community, combining advanced technology with personalized attention.
				</div>
			</div>
			<div className="hero__column hero__column_image hero-image">
				<VideoScreen />
			</div>
		</div>
	)
}
