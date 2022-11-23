import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Header, Hourly} from '../../container';
import {weatherUrl, weatherKey, geoKey, geoUrl} from '../../api'
import { Loading} from '../../pages';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.scss'

const MainPage = () => {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();
	
	const currentCity = useSelector(state => state.currentCity)
	let lat = ''
	let lon = ''

	async function searchForCity() {
		const response = await fetch(`${geoUrl}/json?q=${currentCity}&key=${geoKey}&language=en&pretty=1`)
			.then(response => response.json())
			.then(response => {
				lat = response.results[0].geometry.lat
				lon = response.results[0].geometry.lng
			})
			.catch((err) => navigate('/cities'))
			getCityData()
	}


	const getCityData = () => {
	  const currentWeatherFetch = fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`)
	  const forecastFetch = fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`)
  
	  Promise.all([currentWeatherFetch, forecastFetch])
		.then(async (response) => {
		  const weatherResponse = await response[0].json()
		  const forecastResponse = await response[1].json()
		  setCurrentWeather({...weatherResponse});
		  setForecast({...forecastResponse})
		})
		.catch((err) => console.log(err))
		setIsLoading(false)
	}

	useEffect(() => {
		searchForCity()
	}, []);

	return (
		<div className={styles.mainPage}>
			<div className={styles.container}>
			{isLoading ? 
			<Loading />
			: 
			<>
			{currentWeather && <Navbar data={currentWeather}/>}
			{currentWeather && <Header data={currentWeather}/>}
			{forecast && <Hourly data={forecast}/> }
			</>
			}
			</div>
		</div>
	);
};

export default MainPage;
