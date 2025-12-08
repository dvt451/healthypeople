import React from 'react'
import HeroTop from './HeroTop'
import HeroBottom from './HeroBottom'

export default function Hero() {
	return (
		<div className="home-page__hero home-page-hero">
			<div className='home-page-hero__container'>
				<HeroTop />
				<HeroBottom />
			</div>
		</div>
	)
}
