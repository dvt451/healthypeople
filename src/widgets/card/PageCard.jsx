import React from 'react'
import { Link } from 'react-router-dom';

export default function PageCard({ item, slugAddress }) {
	if (!item.slider) return null;

	return (
		<Link to={`/${slugAddress}/${item.slug}`} className='page-card'>
			<div className="page-card__image">
				{item.slider.image && <img src={item.slider.image} alt={item.slider.title} />}
			</div>
			<div className="page-card__content">
				{item.slider.title && <h3 className="page-card__title">{item.slider.title}</h3>}
				{item.slider.text && <div className="page-card__author_text">{item.slider.text}</div>}
				{item.date && <div className="page-card__date">{item.date}</div>}
				<div className="page-card__author">
					{item.authorImage && <div className="page-card__author_image"><img src={item.authorImage} alt={item.author} /></div>}
					{item.author && <div className="page-card__author_name">{item.author}</div>}
				</div>
			</div>
		</Link>
	)
}
