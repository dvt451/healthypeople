import React, { useContext } from 'react'
import { MyContext } from '../../shared/hooks/MyContextProvider';

export default function AppointmentForm() {
	const { menuHandler } = useContext(MyContext);
	return (
		<div className='header-sub-menu'>
			<button onClick={menuHandler} className="header-sub-menu__Layer"></button>
			<div className="header-sub-menu__frame header-sub-menu-frame">
				<button onClick={menuHandler} className="header-sub-menu-frame__close-button burger-button _active">
					<span></span>
				</button>

				<h2>Appointment</h2>
				<form action=""
					method=""
					className="header-sub-menu-frame__form appointment-form">
					<label className='appointment-form__label'>
						<input type="text" name="name" id="name" placeholder='Name' />
					</label>
					<label className='appointment-form__label'>
						<input type="text" name="surname" id="surname" placeholder='Surname' />
					</label>
					<label className='appointment-form__label'>
						<input type="text" name="socialid" id="socialid" placeholder='Social ID' />
					</label>
					<label className='appointment-form__label'>
						<input type="tel" name="phone" id="phone" placeholder='Phone' />
					</label>
					<label className='appointment-form__label'>
						<input type="email" name="email" id="email" placeholder='Email' />
					</label>
					<button type='submit' className='appointment-form__button'>Send</button>
				</form>
			</div>
		</div>
	)
}
