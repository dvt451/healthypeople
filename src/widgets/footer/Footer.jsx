import React from 'react'
import HeaderLogo from '../header/HeaderLogo'
import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { generalInfo } from '../../components/config'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Header from '../header/Header'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className="footer__top">
				<div className='footer__cnt-left'>
					<div className="footer__column footer-content">
						<div className="footer__title">We find clean air and solve the problems others walk away from</div>
					</div>
					<div className="footer__column footer-video">
						<video controlsList="nodownload" autoPlay playsInline muted loop >
							<source src="/videos/mitosis.mp4" type='video/mp4' />
						</video>
					</div>
				</div>
			</div>
			<div className="footer__main">
				<div className="footer__container">
					<HeaderLogo />
					<div className='contact-item-wrapper'>
						<a href='https://maps.app.goo.gl/3dSh3j6XF8JDDsJ98' target='_blank' className="contact-item">
							<div className="contact-item__icon"><SlLocationPin /></div>
							<div className="contact-item__text">{generalInfo.location}</div>
						</a>
						<a href={`tel:${generalInfo.phone}`} className="contact-item">
							<div className="contact-item__icon"><FiPhone /></div>
							<div className="contact-item__text">{generalInfo.phone}</div>
						</a>
						<a href={`mailto:${generalInfo.email}`} className="contact-item">
							<div className="contact-item__icon"><CiMail /></div>
							<div className="contact-item__text">{generalInfo.email}</div>
						</a>
					</div>
					<div className='footer__link-wrapper'>
						<Link to={'/'} className="footer__link">Terms & Conditions</Link>
						<Link to={'/'} className="footer__link">Privacy Policy</Link>
					</div>

				</div>
			</div>

		</footer>
	)
}
