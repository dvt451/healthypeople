import React from 'react'
import { Link } from 'react-router-dom';

export default function RelatedCard({ item, slugAddress }) {
	if (!item.slider) return null;

	return (
		<Link to={`/${slugAddress}/${item.slug}`} className='related-card'>
			<div className="related-card__content">
				{item.slider.title && <h3 className="related-card__title">{item.slider.title}</h3>}
				{item.date && <div className="related-card__date">{item.date}</div>}
				<div className="related-card__author">
					{item.authorImage && <div className="related-card__author_image"><img src={item.authorImage} alt={item.author} /></div>}
					{item.author && <div className="related-card__author_name">{item.author}</div>}
				</div>
			</div>
		</Link>
	)
}
