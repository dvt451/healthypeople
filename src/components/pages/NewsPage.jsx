import React, { useMemo } from 'react'
import { departments, news } from '../config';
import { useParams } from 'react-router-dom';
import PageCard from '../../widgets/card/PageCard';
import RelatedCard from '../../widgets/card/RelatedCard';

export default function NewsPage() {
	const { slug } = useParams();
	const department = news.find(dep => dep.slug === slug);
	const randomNews = useMemo(() => {
		return [...news]
			.sort(() => 0.5 - Math.random())
			.slice(0, 4);
	}, [news]);

	if (!department) return <main><h1 style={{ paddingBlock: 120 + 'px', textAlign: 'center' }} className='section-title-1'>Department not found</h1></main>;

	return (
		<main className='article-page'>
			<div className="article-page__container">
				<h1 className="article-page__title section-title-1">{department.newsPage.title}</h1>
				<article className="article-page-body">
					<div className="article-page-body__author">
						Posted on {department.date} by {department.author}
					</div>
					<div className="article-page-body__head">
						<div className="article-page-body__column article-page-body__column_image">
							<img src={department.newsPage.image} alt={department.newsPage.title} />
						</div>
					</div>
					<div className="article-page-body__content narrow-cnt">
						<div className='article-page-body__content-block'>
							<h3 className="article-page-body__subtitle">{department.newsPage.mainContext.subtitle}</h3>
							<div className="article-page-body__text-wrapper">
								{
									department.newsPage.mainContext.texts.map((textItem, j) => {
										return <>
											<p key={j} className="article-page-body__text">{textItem.text}</p>
											{textItem.image && <img key={j + 'img'} className='article-page-body__text-image' src={textItem.image} alt={department.newsPage.title} />}
										</>
									})
								}
							</div>
						</div>
					</div>
				</article>
				<div className='related'>
					<h2 className="related__title section-title-2">Related Articles</h2>
					<div className="related__list">
						{
							randomNews.map((item, i) => {
								return <RelatedCard slugAddress='news' key={i} item={item} />
							})
						}
					</div>
				</div>
			</div>
		</main >
	)
}
