import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function SliderCard({ i, item, slugAddress }) {
	if (!item.slider) return null;
	const depCardNumber = (i + 1) / 10 < 10 ? `0${i + 1}` : `${i + 1}`;
	return (
		<Link to={`${slugAddress}/${item.slug}`}
			className={`department-card`}
		>
			<div className="department-card__image">
				<div className="department-card__layer"></div>
				<img src={item.slider.image} alt={item.slider.title} />
			</div>
			<div className="department-card__content">
				<div className="department-card__top">
					<span className="department-card__number">{depCardNumber}</span>
				</div>

				<div className='department-card__bottom'>
					<div className="department-card__head">
						<h3 className="department-card__title">{item.slider.title}</h3>
					</div>
					<p className="department-card__text">{item.slider.text}</p>
				</div>
			</div>
		</Link>
	)
}
