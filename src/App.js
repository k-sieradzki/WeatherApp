import React, {useState, useEffect} from 'react';


import { MainPage, CitiesPage, MoreDaysPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WrongRoute } from './container';

import { useStateContext } from './contexts/ContextProvider';
import {weatherUrl, weatherKey, geoKey, geoUrl} from './api'
import './App.css';



const App = () => {
	const {currentWeather, setCurrentWeather} = useStateContext()
	const {forecast, setForecast} = useStateContext()
	
	const {currentCity, setCurrentCity} = useStateContext()
	const {lat, setLat} = useStateContext()
	const {lon, setLon} = useStateContext()


	const getCityData = () => {
	  const currentWeatherFetch = fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`)
	  const forecastFetch = fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`)
  
	  Promise.all([currentWeatherFetch, forecastFetch])
		.then(async (response) => {
		  const weatherResponse = await response[0].json()
		  const forecastResponse = await response[1].json()
  
		  setCurrentWeather({...weatherResponse});
		  setForecast({...forecastResponse})
		  console.log('pobrano z fetcha')
		})
		.catch((err) => console.log(err))
	}
	
	useEffect(() => {
		getCityData()
		return
	},[lat]);




	




	return (
		<div className='smallTest'>
		<BrowserRouter>
				<Routes>
					<Route path='/' exact element={currentCity ? <MainPage currentWeather={currentWeather} forecast={forecast}/> : <CitiesPage data={currentWeather}/> } />
					<Route path='/moredays' element={<MoreDaysPage data={forecast}/>} />
					<Route path='/cities' element={<CitiesPage data={currentWeather}/> } />
					<Route path='*' element={ <WrongRoute/>}/>
				</Routes>
			</BrowserRouter>
    </div>
	);
};

export default App;
