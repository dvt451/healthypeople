import React from 'react'
import { generalInfo } from '../../components/config'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

export default function HeaderLogo() {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const logohandler = () => {
		if (pathname === '/') {
			// Прокрутка наверх на главной странице
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		} else {
			navigate('/');
		}
	};
	return (
		<button onClick={logohandler} className="header__logo header-logo">
			{
				generalInfo.logo ?
					<img src={generalInfo.logo} alt="header-logo" /> :
					<div className="header-logo__icon header-logo-icon">
						<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
					</div>
			}
			{generalInfo.logoName && <div className="header-logo__text">{generalInfo.logoName}</div>}
		</button>
	)
}
