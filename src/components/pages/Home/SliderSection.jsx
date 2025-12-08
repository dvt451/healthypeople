import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SliderCard from '../../../widgets/card/SliderCard';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

// Импортируем стили Swiper
import 'swiper/css';

export default function SliderSection({ nameClass = '', arrayItems = [], sectionTitle = '' }) {
	return (
		<div className={`${nameClass}slider-section`}>
			<div className="slider-section__container">
				<div className="slider-section__head section-head">
					<div className="slider-section__title section-title-2">{sectionTitle}</div>
					<div className="slider-navigation">
						<button className="swiper-button swiper-button-prev">
							<IoIosArrowRoundBack />
						</button>
						<button className="swiper-button swiper-button-next">
							<IoIosArrowRoundForward />
						</button>
					</div>
				</div>
			</div>
			<div className='slider-section__cnt-left'>
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView={6}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						480: {
							slidesPerView: 1.5,
						},
						768: {
							slidesPerView: 2,
						},
						991: {
							slidesPerView: 2.5,
						},
						1200: {
							slidesPerView: 3,
						}
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					className="departments-slider"
				>
					{arrayItems.map((item, index) => (
						<SwiperSlide key={item.id}>
							<SliderCard
								i={index}
								item={item}
							/>
						</SwiperSlide>
					))}
				</Swiper>

			</div>
		</div>
	);
}