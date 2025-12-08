import React from 'react'
import { NavLink } from 'react-router-dom';
import { generalInfo } from '../../components/config';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function HeaderMenu({ menuHandler, nameClass = '' }) {
	return (
		<nav className={`${nameClass}menu`}>
			<ul className="menu__list">
				{
					generalInfo.menus.map((item, index) => {
						return (
							<li className="menu__item" key={index}>
								<NavLink
									to={item.link}
									className={({ isActive }) =>
										`menu__link ${isActive ? 'active' : ''} ${item.name === 'Contact' ? 'menu__link_contact' : 'menu__link_hv'}`
									}
								>
									<span>{item.name}</span>
								</NavLink>
							</li>
						);
					})
				}
				<li className="menu__item">
					<button onClick={menuHandler} className="menu__link menu__link_appointment"><span>Appointment <HiOutlineArrowNarrowRight /></span></button>
				</li>
			</ul>
		</nav>
	)
}
