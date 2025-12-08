import React, { useContext } from 'react'
import { MyContext } from '../../shared/hooks/MyContextProvider';
import HeaderLogo from './HeaderLogo';
import AppointmentForm from './AppointmentForm';
import HeaderMenu from './HeaderMenu';

export default function Header() {
	const { menuHandler, headerState, burgerState, setBurgerState } = useContext(MyContext);
	return (
		<div className={`header${headerState ? ' menu-opened' : ''}${burgerState ? ' burger-opened' : ''}`}>

			<div
				style={{
					transform: headerState ? 'translateX(-25rem)' : 'translateX(0)',
					transition: 'all 0.2s ease',
				}}
				className="header__container">
				<div className="header__overlay"></div>
				<HeaderLogo />
				<HeaderMenu nameClass='header__menu ' menuHandler={menuHandler} />
				<button type="button" onClick={() => setBurgerState(!burgerState)} className={`burger__icon burger-button ${burgerState ? '_active' : ''}`}><span></span></button>
			</div>
			<div style={{ transform: burgerState && headerState && "translateX(-400px)" }} className={`burger-body${burgerState ? ' _active' : ''}`}>
				<HeaderMenu nameClass='burger-body__menu ' menuHandler={menuHandler} />
			</div>
			<AppointmentForm />
		</div >


	)
}
