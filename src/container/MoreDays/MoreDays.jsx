import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import styles from './MoreDays.module.scss'

const MoreDays = ({data}) => {
	const units = useSelector(state => state.units) 

	//////////////////FREE API SOLUTION///////////////////////////
	let weekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	let validDays = [];
	let validNights = [];

	// Looking for day
	for(let i=0; i<data.list.length; i++ ){
		let lookingTime = data.list[i].dt_txt.slice(-8 ,-3)
		if(lookingTime === "11:00" || lookingTime === "12:00" || lookingTime === "13:00"){
			validDays.push(i)		
		}
	}
	//Looking for Night
	for(let i=0; i<data.list.length; i++ ){
		let lookingTime = data.list[i].dt_txt.slice(-8 ,-3)
		if(lookingTime === "01:00" || lookingTime === "02:00" || lookingTime === "03:00"){
			validNights.push(i)
		}
	}
	//////////////////FREE API SOLUTION///////////////////////////



	return (
		<div className={styles.moreDays}>
			<div className={styles.container}>
				<div className={styles.daysList}>
					<Link to={'/'} className={styles.arrow}>
						<FaLongArrowAltLeft />
					</Link>
					<h2>5-day forecast</h2>
					<div className={styles.daysBox}>

					{validDays.map((item, index) => (
						<div className={styles.day} key={index}>
						<div className={styles.dayName}>
							<p>{weekArr[new Date(data.list[item].dt * 1000).getDay()]}</p>
						</div>
						<div className={styles.weatherIcon}>
							<div className={styles.icon}>
								<img src={`icons/${data.list[item].weather[0].icon}.png`} alt='' />
							</div>
							<div className={styles.desc}>
								<p>{data.list[item].weather[0].main}</p>
							</div>
						</div>
						<div className={styles.temperature}>
							<div className={styles.temp}>
								<p>{units === 'metric' ? <>{Math.round(data.list[item].main.temp)}</> : <>{Math.round((data.list[item].main.temp * 1.8) + 32)}</>}° <span>/ {units === 'metric' ? <>{Math.round(data.list[validNights[index]].main.temp)}</> : <>{Math.round((data.list[validNights[index]].main.temp * 1.8) + 32)}</>}°</span></p>
							</div>
						</div>
					</div>
					))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreDays;
