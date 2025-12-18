import React from 'react'
import Hero from './Hero/Hero'
import { generalInfo, hospitals } from '../../config'

export default function Contacts() {

	return (
		<main className='contacts-page'>
			<Hero />
			<div className="contacts-page__container">
				<div className="contacts-page__list">
					{
						hospitals.map((item, i) => {
							return <div key={i} className="contacts-item">
								<h3 className="contacts-item__city">
									{generalInfo.brandName}
									<span>{item.city}</span>
								</h3>
								<div className="contacts-item__body">
									<div className="contacts-item__title">{item.name}</div>
									<a href={item.googleMapLink} className="contacts-item__address">
										{
											item.address.map((itm, i) => {
												return <span key={i}>{itm}</span>
											})
										}
									</a>
									<a href={`tel:${item.phone}`} className="contacts-item__phone">Phone: <span>{item.phone}</span></a>
								</div>
								<div className='contacts-item__map'>
									<iframe src={item.googleIframeMapSrc} allowfullscreen="" loading="lazy"></iframe>
								</div>
							</div>
						})
					}
				</div>
			</div>
		</main>
	)
}
