import React from 'react';
import { Navbar, Header, Hourly} from '../../container';

import { useStateContext } from '../../contexts/ContextProvider';

const MainPage = ({currentWeather, forecast}) => {

	const {actualPage, setActualPage} = useStateContext()
	setActualPage('MainPage')
	return (
		<>
			<Navbar />
			{currentWeather && <Header data={currentWeather}/>}
			{forecast &&<Hourly data={forecast}/>}
		</>
	);
};

export default MainPage;
