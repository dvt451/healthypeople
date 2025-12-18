import React, { useContext } from 'react'
import { MyContext } from '../../../shared/hooks/MyContextProvider'
import Hero from './Hero/Hero'
import SectionContent from './SectionContent'
import SectionContentList from './SectionContentList'
import TeamMembers from './TeamMembers'

export default function About() {
	const { headerState } = useContext(MyContext)
	return (
		<main className='about-page' style={{
			transform: headerState ? 'translateX(-400px)' : 'translateX(0)',
			transition: 'all 0.2s ease',
		}}>
			<Hero />
			<SectionContent />
			<SectionContentList />
			<TeamMembers />
		</main>
	)
}
