import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './Hourly.module.scss'


const Hourly = ({data}) => {
	const units = useSelector(state => state.units)

	return (
		<div className={styles.hourly}>
			<div className={styles.container}>
				<div className={styles.topText}>
					<h2>+24h</h2>
					<h5>
						<Link to={'/moredays'} state={data} className={styles.moreLink}>
							5 days
							<AiOutlineArrowRight className={styles.arrowRight} />
						</Link>
					</h5>
				</div>
				<div className={styles.hourlyWather}>
					<div className={styles.hourBox}>
						<>
							<Swiper
								slidesPerView={4}
								spaceBetween={0}
								grabCursor={true}
								pagination={{
									clickable: true,
								}}
								modules={[FreeMode, Pagination]}
								className={styles.mySwiper}
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

								{data.list.slice(0, 10).map((item, index) => (
									<SwiperSlide key={index}>
										<div className={styles.box}>
											<div className={styles.temperature}>
												<p>{units === 'metric' ? <>{Math.round(data.list[index].main.temp)}</> : <>{Math.round((data.list[index].main.temp * 1.8) + 32)}</>}°</p>
											</div>
											<div className={styles.weatherIcon}>
												<img
													src={`icons/${data.list[index].weather[0].icon}.png`}
													alt=''
												/>
											</div>
											<div className={styles.time}>
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
