import React from 'react';
import { Link } from 'react-router-dom';
import { GiBackwardTime } from 'react-icons/gi';
import { useStateContext } from '../../contexts/ContextProvider';

import './WrongRoute.css'
const WrongRoute = () => {
	return (
		<>
			<div className='wrongRoute'>
				<div className='container'>
					<span className='error'>404</span>
					<p className='erorInfo'>This page doesn't exist.</p>
					<Link to={'/'} className='link'>
						<GiBackwardTime className='backBtn'/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default WrongRoute;
