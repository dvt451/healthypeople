import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { generalInfo } from '../../components/config';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MyContext } from '../../shared/hooks/MyContextProvider';

export default function HeaderMenu({ nameClass = '' }) {
	const { menuHandler, setBurgerState } = useContext(MyContext);
	return (
		<nav className={`${nameClass}menu`}>
			<ul className="menu__list">
				{
					generalInfo.menus.map((item, index) => {
						return (
							<li className="menu__item" key={index}>
								<NavLink
									onClick={() => setBurgerState(false)}
									to={item.link}
									className={({ isActive }) =>
										`menu__link ${isActive ? 'active' : ''} ${item.name === 'Contacts' ? 'menu__link_contact' : 'menu__link_hv'}`
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
