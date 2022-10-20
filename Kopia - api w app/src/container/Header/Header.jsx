import React from 'react';

import images from '../../assets/images';

import { TbWind } from 'react-icons/tb';
import { SiRainmeter } from 'react-icons/si';
import { GiWaves } from 'react-icons/gi';
import { useStateContext } from '../../contexts/ContextProvider';


import './Header.css';
const Header = ({data}) => {

	let time = new Date()
	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthArr = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
  ];


	return (
		<header>
			<div className='container'>
				<div className='weather'>
					<div className='main-weather'>
						<div className='img-box'>
							<img src={`icons/${data.weather[0].icon}.png`} alt='' />
						</div>
						<div className='temp-box'>
							<div className='temp'>
								<h2>
									{Math.round(data.main.temp)}<span>°C</span>
								</h2>
								<h3>{data.weather[0].main}</h3>
								<h6>{daysArr[time.getDay()]}, {time.getDate()} {[monthArr[time.getMonth()]]}</h6>
							</div>
						</div>
					</div>
					<div className='add-info'>
						<div className='item-box'>
							<div className='item'>
								<div className='icon'>
									<TbWind />
								</div>
								<div className='data'>{Math.round(data.wind.speed)} km/h</div>
								<div className='name'>Wind</div>
							</div>

							<div className='item'>
								<div className='icon'>
									<SiRainmeter />
								</div>
								<div className='data'>{data.main.humidity}%</div>
								<div className='name'>Humidity</div>
							</div>

							<div className='item'>
								<div className='icon'>
									<GiWaves />
								</div>
								<div className='data'>{data.main.pressure} hPa</div>
								<div className='name'>Pressure</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bot-shadow'></div>
		</header>
	);
};

export default Header;
