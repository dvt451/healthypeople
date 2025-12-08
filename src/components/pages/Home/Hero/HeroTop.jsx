import React, { useContext } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import VideoScreen from './VideoScreen'
import { MyContext } from '../../../../shared/hooks/MyContextProvider'

export default function HeroTop() {
	const { menuHandler } = useContext(MyContext)
	return (
		<div className="home-page-hero__top">
			<div className="home-page-hero__column home-page-hero-content">

				<h1 className="home-page-hero-content__title section-title-1">
					We <span>provide</span> medical Service that you can <span>trust!</span>
				</h1>
				<div className="home-page-hero-content__home-page-hero-image home-page-hero-image">
					<VideoScreen />
				</div>
				<div className="home-page-hero-content__sub-title">
					The All On Four concept means that the bridge that compensates all teeth of one jaw leans on only 4 implants.
				</div>
				<button onClick={menuHandler} className="home-page-hero-content__button">
					<span>Book Appointment</span>
					<HiArrowLongRight />
				</button>
			</div>
			<div className="home-page-hero__column home-page-hero__column_image home-page-hero-image">
				<VideoScreen />
			</div>
		</div>
	)
}
