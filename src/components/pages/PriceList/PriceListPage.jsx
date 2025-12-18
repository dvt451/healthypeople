import React from 'react'
import PriceList from './PriceList'
import Calculator from './Calculator'

export default function PriceListPage() {
	return (
		<main className='price-list-page'>
			<div className="price-list-page__container">
				<h1 className="price-list-page__title section-title-1">Price List</h1>
				<div className="price-list-page__body">
					<div className="price-list-page__column">
						<PriceList />
					</div>
					<div className="price-list-page__column">
						<Calculator />
					</div>
				</div>
			</div>
		</main>
	)
}
