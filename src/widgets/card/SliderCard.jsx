import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function SliderCard({ i, item, isHovered, onHover }) {
	const depCardNumber = (i + 1) / 10 < 10 ? `0${i + 1}` : `${i + 1}`;

	return (
		<div
			onMouseEnter={() => onHover?.(i)}
			onMouseLeave={() => onHover?.(-1)}
			className={`department-card ${isHovered ? 'hovered' : ''}`}
		>
			<div className="department-card__image">
				<div className="department-card__layer"></div>
				<img src={item.image} alt={item.title} />
			</div>
			<div className="department-card__content">
				<div className="department-card__top">
					<span className="department-card__number">{depCardNumber}</span>
				</div>

				<div className='department-card__bottom'>
					<div className="department-card__head">
						<h3 className="department-card__title">{item.title}</h3>
						<FaArrowRightLong />
					</div>
					<p className="department-card__text">{item.text}</p>
				</div>
			</div>
		</div>
	)
}
