import React from 'react'
import { news } from '../config'
import PageCard from '../../widgets/card/PageCard'

export default function AllNewsPage() {


	return (
		<main className='all-card-page'>
			<div className="all-card-page__container">
				<h1 className="all-card-page__title section-title-1">News</h1>
				<div className="all-card-page__list">
					{
						news.map((item, i) => {
							return <PageCard slugAddress='news' key={i} item={item} />
						})
					}
				</div>
			</div>
		</main>
	)
}
