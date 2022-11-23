import React from 'react';
import { MainPage, CitiesPage, MoreDaysPage, WrongRoute, Loading } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import styles from './App.module.scss'

const App = () => {
	const currentCity = useSelector(state => state.currentCity)
	return (
		<div className={styles.center}>
			<div className={styles.centerInside}>
				<BrowserRouter>
					<Routes>
						<Route path='/' exact element={currentCity ? <MainPage /> : <CitiesPage/> } />
						<Route path='/moredays' element={<MoreDaysPage/>} />
						<Route path='/cities' element={<CitiesPage/> } />
						<Route path='*' element={ <WrongRoute/>}/>
					</Routes>
				</BrowserRouter>
			</div>
			
    </div>
	);
};

export default App;
