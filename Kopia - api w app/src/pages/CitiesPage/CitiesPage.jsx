import React from 'react';
import { Cities } from '../../container';
import { useStateContext } from '../../contexts/ContextProvider';

const CitiesPage = () => {
	const {actualPage, setActualPage} = useStateContext()
	setActualPage('CitiesPage')
	return (
		<>
			<Cities />
		</>
	);
};

export default CitiesPage;
