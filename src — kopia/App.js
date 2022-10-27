import React, {useState, useEffect} from 'react';


import { MainPage, CitiesPage, MoreDaysPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WrongRoute } from './container';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';



const App = () => {
	const {currentCity, setCurrentCity} = useStateContext()




	return (
		<div className='smallTest'>
		<BrowserRouter>
				<Routes>
					<Route path='/' exact element={currentCity ? <MainPage /> : <CitiesPage/> } />
					<Route path='/moredays' element={<MoreDaysPage/>} />
					<Route path='/cities' element={<CitiesPage/> } />
					<Route path='*' element={ <WrongRoute/>}/>
				</Routes>
			</BrowserRouter>
    </div>
	);
};

export default App;
