import React, { useContext } from 'react';
import { MyContext } from "../../../shared/hooks/MyContextProvider";

export default function Calculator() {
	const {
		calculateArray,
		increaseQuantity,
		decreaseQuantity,
		removeFromCalculator,
		clearCalculator
	} = useContext(MyContext);

	// Вычисление общей суммы с учетом количества
	const totalAmount = calculateArray.reduce((sum, item) => {
		return sum + (item.price * (item.quantity || 1));
	}, 0);

	return (
		<div className='price-list-calculator'>
			<div className={`accordion__item _active`} >
				<div className="accordion__head">
					<h3 className="accordion__title">
						Service Calculator
					</h3>
					{calculateArray.length > 0 && (
						<button
							className="accordion__clean"
							onClick={clearCalculator}
						>
							Clean
						</button>
					)}
				</div>
				<div className="accordion__content">
					<div className="price-list-block">

						<>
							<div className="price-list-block__head">
								<h4 className="price-list-block__column-title">Service</h4>
								<h4 className="price-list-block__column-title">Quantity</h4>
								<h4 className="price-list-block__column-title">Price</h4>
							</div>
							<div className="price-list-block__services">
								{
									calculateArray.map((item) => {
										const itemTotal = item.price * (item.quantity || 1);

										return (
											<div key={item.id} className="price-list-block__body">
												<div className="price-list-block__column">
													{item.service}
												</div>
												<div className="price-list-block__column">
													<div className="quantity-control">
														<button
															className="quantity-btn minus price-list-block__button"
															onClick={() => {
																if ((item.quantity || 1) === 1) {
																	// Если количество 1, то удаляем
																	removeFromCalculator(item.id);
																} else {
																	// Иначе уменьшаем количество
																	decreaseQuantity(item.id);
																}
															}}
														>
															<span></span>
														</button>
														<span className="quantity-value">
															{item.quantity || 1}
														</span>
														<button
															className="quantity-btn plus price-list-block__button"
															onClick={() => increaseQuantity(item.id)}
														>
															<span></span>
															<span></span>
														</button>
													</div>
												</div>
												<div className="price-list-block__column">
													${item.price}
												</div>
												<div className="price-list-block__column">
													${itemTotal.toFixed(2)}
												</div>
											</div>
										);
									})
								}
							</div>
							<div className="price-list-total">
								<div className="price-list-total__value">Total: ${totalAmount.toFixed(2)}</div>
							</div>
						</>

					</div>
				</div>
			</div>
		</div>
	);
}