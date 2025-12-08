import React, { useContext } from 'react'
import { MyContext } from '../../../../shared/hooks/MyContextProvider'

export default function HeroBottom() {
	const { menuHandler } = useContext(MyContext)
	return (
		<div className='home-page-hero__bottom home-page-hero-bottom'>
			<div className="home-page-hero-bottom__labels">
				<a href="tel:+451 052 052 55"
					className="home-page-hero-bottom__label home-page-hero-bottom-label">
					<div className="home-page-hero-bottom-label__number">01</div>
					<div className="home-page-hero-bottom-label__text">Emergancy call <span>+451 052 052 55</span></div>
				</a>
				<a href="tel:+451 052 052 55" className="home-page-hero-bottom__label home-page-hero-bottom-label">
					<div className="home-page-hero-bottom-label__number">02</div>
					<div className="home-page-hero-bottom-label__text">Call to home <span>+451 052 052 55</span></div>
				</a>
				<button onClick={menuHandler} className="home-page-hero-bottom__label home-page-hero-bottom-label">
					<div className="home-page-hero-bottom-label__number">03</div>
					<div className="home-page-hero-bottom-label__text">Book Appointment</div>
				</button>
			</div>
		</div>
	)
}
