import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Hourly.css';

const Hourly = ({ data }) => {
	return (
		<div className='hourly'>
			<div className='container'>
				<div className='top-text'>
					<h2>+24h</h2>
					<h5>
						<Link to={'/moredays'} className='moreLink'>
							5 days
							<AiOutlineArrowRight className='arrow-right' />
						</Link>
					</h5>
				</div>
				<div className='hourly-wather'>
					<div className='hour-box'>
						<>
							<Swiper
								slidesPerView={4}
								spaceBetween={0}
								grabCursor={true}
								pagination={{
									clickable: true,
								}}
								modules={[FreeMode, Pagination]}
								className='mySwiper'
								breakpoints={{
									576: {
										slidesPerView: 5,
									},
									768: {
										slidesPerView: 6,
									},
									992: {
										slidesPerView: 8,
									},
									1200: {
										slidesPerView: 8,
									},
								}}
							>
								{data.list.splice(10, 20).map((item, index) => (
									<SwiperSlide key={index}>
										<div className='box'>
											<div className='temperature'>
												<p>{Math.round(data.list[index].main.temp)}°C</p>
											</div>
											<div className='weather-icon'>
												<img
													src={`icons/${data.list[index].weather[0].icon}.png`}
													alt=''
												/>
											</div>
											<div className='time'>
												<p>{data.list[index].dt_txt.slice(-8, -3)}</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hourly;
