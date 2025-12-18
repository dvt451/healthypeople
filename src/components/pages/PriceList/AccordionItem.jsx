import { useState, useEffect, useContext, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MyContext } from "../../../shared/hooks/MyContextProvider";

export const AccordionItem = (props) => {
	const { calculateArray, addToCalculator } = useContext(MyContext);
	const contentEl = useRef();
	const { handleToggle, active, activated, service, freemode } = props;
	const { title, id, services } = service;

	useEffect(() => {
		if (id === activated && !active) {
			handleToggle(id);
		}
	}, []);

	// Функция добавления услуги в калькулятор
	const handleAddService = (serviceItem, e) => {
		e.stopPropagation(); // Останавливаем всплытие
		addToCalculator(serviceItem);
	};

	return (
		<div className={`accordion__item ${active ? '_active' : ''}`} >
			<button onClick={() => handleToggle(id)} className="accordion__head">
				<h3 className="accordion__title">
					<span className="accordion__title-txt">{title}</span>
				</h3>
				<div className="accordion__icon">
					<IoIosArrowForward />
				</div>
			</button>
			<div className="accordion__content">
				<div className="price-list-block">
					<div className="price-list-block__head">
						<h4 className="price-list-block__column-title">Service</h4>
						<h4 className="price-list-block__column-title">Description</h4>
						<h4 className="price-list-block__column-title">Price</h4>
						<h4 className="price-list-block__column-title">Action</h4>
					</div>
					<div className="price-list-block__services">
						{
							services.map((item, i) => {
								return <div key={i} className="price-list-block__body">
									<div className="price-list-block__column">
										{item.service}
									</div>
									<div className="price-list-block__column">
										{item.description}
									</div>
									<div className="price-list-block__column">
										${item.price}
									</div>
									<div className="price-list-block__column">
										<button
											className="price-list-block__button"
											onClick={(e) => handleAddService(item, e)}
										>
											<span></span>
											<span></span>
										</button>
									</div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};