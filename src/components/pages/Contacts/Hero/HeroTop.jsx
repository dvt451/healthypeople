import React from 'react'
import VideoScreen from './VideoScreen'
import { generalInfo } from '../../../config'

export default function HeroTop() {
	return (
		<div className="hero__top">
			<div className="hero__column hero-content">

				<h1 className="hero-content__title section-title-1">
					Welcome to <span>HHHQ</span>
				</h1>
				<div className="hero-content__hero-image hero-image">
					<VideoScreen />
				</div>
				<div className="hero-content__contacts">
					<div>Contact us via email using: <a href={`mailto:${generalInfo.email}`}>{generalInfo.email}</a></div>
					<div>Or call us using: <a href={`tel:${generalInfo.phone}`}>{generalInfo.phone}</a></div>
				</div>
			</div>
			<div className="hero__column hero__column_image hero-image">
				<VideoScreen />
			</div>
		</div>
	)
}
