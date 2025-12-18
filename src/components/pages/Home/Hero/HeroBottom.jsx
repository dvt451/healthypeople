import React, { useContext } from 'react'
import { MyContext } from '../../../../shared/hooks/MyContextProvider'

export default function HeroBottom() {
	const { menuHandler } = useContext(MyContext)
	return (
		<div className='hero__bottom hero-bottom'>
			<div className="hero-bottom__labels">
				<a href="tel:+451 052 052 55"
					className="hero-bottom__label hero-bottom-label">
					<div className="hero-bottom-label__number">01</div>
					<div className="hero-bottom-label__text">Emergancy call <span>+451 052 052 55</span></div>
				</a>
				<a href="tel:+451 052 052 55" className="hero-bottom__label hero-bottom-label">
					<div className="hero-bottom-label__number">02</div>
					<div className="hero-bottom-label__text">Call to home <span>+451 052 052 55</span></div>
				</a>
				<button onClick={menuHandler} className="hero-bottom__label hero-bottom-label">
					<div className="hero-bottom-label__number">03</div>
					<div className="hero-bottom-label__text">Book Appointment</div>
				</button>
			</div>
		</div>
	)
}
