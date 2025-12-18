// MyContextProvider.js
import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Export the context
export { MyContext };

// Export the provider component as default
export default function MyContextProvider({ children }) {
	// Define the state or values you want to share
	const [headerState, setHeaderState] = useState(false)
	const [burgerState, setBurgerState] = useState(false)
	const [calculateArray, setCalculateArray] = useState([]); // Массив для калькулятора
	const menuHandler = () => {
		setHeaderState(!headerState)
	}

	// Функция добавления в калькулятор
	const addToCalculator = (serviceItem) => {
		setCalculateArray(prev => {
			// Проверяем, есть ли уже такая услуга
			const existingIndex = prev.findIndex(item =>
				item.service === serviceItem.service &&
				item.price === serviceItem.price
			);

			if (existingIndex >= 0) {
				// Если есть - увеличиваем количество
				const updated = [...prev];
				updated[existingIndex] = {
					...updated[existingIndex],
					quantity: (updated[existingIndex].quantity || 1) + 1
				};
				return updated;
			} else {
				// Если нет - добавляем новую с количеством 1
				return [...prev, {
					...serviceItem,
					id: Date.now() + Math.random(),
					quantity: 1
				}];
			}
		});
	};

	// Функция увеличения количества
	const increaseQuantity = (id) => {
		setCalculateArray(prev =>
			prev.map(item => {
				if (item.id === id) {
					return { ...item, quantity: (item.quantity || 1) + 1 };
				}
				return item;
			})
		);
	};

	// Функция уменьшения количества
	const decreaseQuantity = (id) => {
		setCalculateArray(prev =>
			prev.map(item => {
				if (item.id === id && (item.quantity || 1) > 1) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			})
		);
	};

	// Функция удаления из калькулятора (если количество 1 и нажать минус)
	const removeFromCalculator = (id) => {
		setCalculateArray(prev => prev.filter(item => item.id !== id));
	};

	// Функция очистки калькулятора
	const clearCalculator = () => {
		setCalculateArray([]);
	};

	// Return the provider with the value
	return <MyContext.Provider value={{
		menuHandler,
		headerState,
		burgerState,
		setBurgerState,
		calculateArray,
		addToCalculator,
		removeFromCalculator,
		clearCalculator,
		increaseQuantity,
		decreaseQuantity
	}}>{children}</MyContext.Provider>;
}
