import React from 'react'
import { useParams } from 'react-router-dom';
import { departments } from '../config';

export default function DepartmentPage() {
	const { slug } = useParams();
	const department = departments.find(dep => dep.slug === slug);

	if (!department) return <main><h1 style={{ paddingBlock: 120 + 'px', textAlign: 'center' }} className='section-title-1'>Department not found</h1></main>;

	return (
		<main className='article-page'>
			<div className="article-page__container">
				<h1 className="article-page__title section-title-1">{department.departmentPage.title}</h1>
				<article className="article-page-body">
					<div className="article-page-body__head">
						<div className="article-page-body__column article-page-body__column_image">
							<img src={department.departmentPage.image} alt={department.departmentPage.title} />
						</div>
						<div className="article-page-body__column article-page-body__column_context">
							<h2 className="article-page-body__subtitle">{department.departmentPage.textToImage.subtitle}</h2>
							<div className="article-page-body__text-wrapper">
								{
									department.departmentPage.textToImage.texts.map((textItem, j) => {
										return <p key={j} className="article-page-body__text">{textItem.text}</p>
									})
								}
							</div>
						</div>
					</div>
					<div className="article-page-body__content">
						<div className='article-page-body__content-block'>
							<h3 className="article-page-body__subtitle">{department.departmentPage.mainContext.subtitle}</h3>
							<div className="article-page-body__text-wrapper">
								{
									department.departmentPage.mainContext.texts.map((textItem, j) => {
										return <p key={j} className="article-page-body__text">{textItem.text}</p>
									})
								}
							</div>
						</div>
					</div>
				</article>
			</div>
		</main >
	)
}
