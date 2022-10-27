import React, {useEffect, useState} from 'react';
import { Navbar, Header, Hourly} from '../../container';

import { useStateContext } from '../../contexts/ContextProvider';
import {weatherUrl, weatherKey, geoKey, geoUrl} from '../../api'

import { Loading, WrongRoute } from '../../pages';

import { useNavigate } from 'react-router-dom';





const MainPage = () => {
	const { currentCity, setCurrentCity } = useStateContext();

	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();
	const {metorimp, setMetorimp} = useStateContext();
	

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
			console.log('lat', lat, "+", 'lon', lon);
			getCityData()
	}


	const getCityData = () => {
	  const currentWeatherFetch = fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=${metorimp}`)
	  const forecastFetch = fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=${metorimp}`)
  
	  Promise.all([currentWeatherFetch, forecastFetch])
		.then(async (response) => {
		  const weatherResponse = await response[0].json()
		  const forecastResponse = await response[1].json()
  
		  setCurrentWeather({...weatherResponse});
		  setForecast({...forecastResponse})
		  console.log('pobrano z fetcha')

		})
		.catch((err) => console.log('i dupa'))
		setIsLoading(false)
	}

	useEffect(() => {
		searchForCity()
		
	}, []);

	useEffect(() => {
		searchForCity()
	}, [metorimp]);





	return (
		<div className='mainPage'>
			<div className="container">
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
