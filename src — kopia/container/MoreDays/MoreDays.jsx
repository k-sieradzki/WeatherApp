import React from 'react';
import { Link } from 'react-router-dom';
import './MoreDays.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
const MoreDays = ({data}) => {
	
	let weekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	let validDays = [];
	let validNights = [];

	

	//////////////////FREE API SOLUTION///////////////////////////
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



	return (
		<div className='more-days'>
			<div className='container'>
				<div className='days-list'>
					<Link to={'/'} className='arrow'>
						<FaLongArrowAltLeft />
					</Link>
					<h2>5-day forecast</h2>
					<div className='days-box'>

					{validDays.map((item, index) => (
						<div className='day' key={index}>
						<div className='day-name'>
							<p>{weekArr[new Date(data.list[item].dt * 1000).getDay()]}</p>
						</div>
						<div className='weather-icon'>
							<div className='icon'>
								<img src={`icons/${data.list[item].weather[0].icon}.png`} alt='' />
							</div>
							<div className='desc'>
								<p>{data.list[item].weather[0].main}</p>
							</div>
						</div>
						<div className='temperature'>
							<div className='temp'>
								<p>
									{Math.round(data.list[item].main.temp)}°<span> {Math.round(data.list[validNights[index]].main.temp)}°</span>
								</p>
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
