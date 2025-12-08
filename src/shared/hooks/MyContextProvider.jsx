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
	const menuHandler = () => {
		setHeaderState(!headerState)
	}

	// Return the provider with the value
	return <MyContext.Provider value={{
		menuHandler,
		headerState,
		burgerState,
		setBurgerState
	}}>{children}</MyContext.Provider>;
}
