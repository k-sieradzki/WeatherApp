import React from 'react';
import { useSelector } from 'react-redux';
import { TbWind } from 'react-icons/tb';
import { SiRainmeter } from 'react-icons/si';
import { GiWaves } from 'react-icons/gi';
import styles from './Header.module.scss'


const Header = ({data}) => {
	const units = useSelector(state => state.units)

	let time = new Date()
	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthArr = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
  ];

	return (
		<header>
			<div className={styles.container}>
				<div className={styles.weather}>
					<div className={styles.mainWeather}>
						<div className={styles.imgBox}>
							<img src={`icons/${data.weather[0].icon}.png`} alt='' />
						</div>
						<div className={styles.tempBox}>
							<div className={styles.temp}>
								<h2>
									{units === 'metric' ? <>{Math.round(data.main.temp)}</> : <>{Math.round((data.main.temp * 1.8) + 32)}</>}<span>°{units === 'metric' ? 'C' : 'F'}</span>
								</h2>
								<h3>{data.weather[0].main}</h3>
								<h6>{daysArr[time.getDay()]}, {time.getDate()} {[monthArr[time.getMonth()]]}</h6>
							</div>
						</div>
					</div>
					<div className={styles.addInfo}>
						<div className={styles.itemBox}>
							<div className={styles.item}>
								<div className={styles.icon}>
									<TbWind />
								</div>

								<div className={styles.data}>
									{units === 'metric' ? <>{Math.round(data.wind.speed * 3600 / 1000)} kmh</> : <>{Math.round(data.wind.speed * 2.236936292051)} mph</>}
								</div>
								<div className={styles.name}>Wind</div>
							</div>

							<div className={styles.item}>
								<div className={styles.icon}>
									<SiRainmeter />
								</div>
								<div className={styles.data}>{data.main.humidity}%</div>
								<div className={styles.name}>Humidity</div>
							</div>

							<div className={styles.item}>
								<div className={styles.icon}>
									<GiWaves />
								</div>
								<div className={styles.data}>{data.main.pressure} hPa</div>
								<div className={styles.name}>Pressure</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.botShadow}></div>
		</header>
	);
};

export default Header;
