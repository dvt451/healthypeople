import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../../shared/hooks/MyContextProvider'
import { HiArrowLongRight } from 'react-icons/hi2'
import VideoScreen from './/Hero/VideoScreen'
import Hero from './Hero/Hero'
import SliderSection from './SliderSection'
import VideoSection from './VideoSection'
import { departments, news } from '../../config'

export default function Home() {
	const { headerState } = useContext(MyContext)


	return (
		<main className='home-page' style={{
			transform: headerState ? 'translateX(-400px)' : 'translateX(0)',
			transition: 'all 0.2s ease',
		}}>
			<Hero />
			<SliderSection slugAddress='/departments' arrayItems={departments} sectionTitle='Discover our departments' />
			<VideoSection />
			<SliderSection slugAddress='/news' arrayItems={news} sectionTitle='News' />
		</main>
	)
}
