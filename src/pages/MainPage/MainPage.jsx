import React from 'react';
import { Navbar, Header, Hourly} from '../../container';



const MainPage = ({currentWeather, forecast}) => {
	console.log('/////////////////////////////////////////////////');
	console.log(`currentWeather`, currentWeather);
	console.log(`forecast`, forecast)
	console.log('/////////////////////////////////////////////////');

	return (
		<>
			<Navbar />
			{currentWeather && <Header data={currentWeather}/>}
			{forecast &&<Hourly data={forecast}/>}
		</>
	);
};

export default MainPage;
