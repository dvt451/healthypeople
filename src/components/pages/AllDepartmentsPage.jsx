import React from 'react'
import { departments } from '../config'
import PageCard from '../../widgets/card/PageCard'

export default function AllDepartmentsPage() {
	return (
		<main className='all-card-page'>
			<div className="all-card-page__container">
				<h1 className="all-card-page__title section-title-1">Departments</h1>
				<div className="all-card-page__list">
					{
						departments.map((item, i) => {
							return <PageCard slugAddress='departments' key={i} item={item} />
						})
					}
				</div>
			</div>
		</main>
	)
}
