import React from 'react'
import HeroTop from './HeroTop'
import HeroBottom from './HeroBottom'

export default function Hero() {
	return (
		<div className="home-page__hero hero">
			<div className='hero__container'>
				<HeroTop />
				<HeroBottom />
			</div>
		</div>
	)
}
