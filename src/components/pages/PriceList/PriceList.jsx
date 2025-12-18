import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem';
import Calculator from './Calculator';

export default function PriceList() {
	const allServices = [
		{
			id: 1,
			title: 'Consultation & Office Visits',
			services: [
				{
					service: 'Initial Consultation',
					description: "We prioritize building strong relationships with our clients.",
					price: 100,
				},
				{
					service: 'Follow-up Visit',
					description: "Follow-up consultation for ongoing treatment.",
					price: 75,
				},
			]
		},
		{
			id: 2,
			title: 'Breast services',
			services: [
				{
					service: 'Mammography',
					description: "Breast screening examination.",
					price: 200,
				},
			]
		},
	];

	const [activeItems, setActiveItems] = useState([]);
	const [activatedItem, setActivatedItem] = useState(1);
	const [freemode, setFreemode] = useState(true);

	const handleToggle = (itemId) => {
		if (freemode) {
			setActiveItems((prevActiveItems) => {
				if (prevActiveItems.includes(itemId)) {
					return prevActiveItems.filter((item) => item !== itemId);
				} else {
					return [...prevActiveItems, itemId];
				}
			});
		} else {
			setActiveItems([itemId]);
		}
	};

	return (
		<div className='price-list-page__price-list'>
			{allServices.map((service) => (
				<AccordionItem
					key={service.id}
					handleToggle={handleToggle}
					active={activeItems.includes(service.id)}
					activated={activatedItem}
					service={service}
					freemode={freemode}
				/>
			))}
		</div>
	);
}