import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { ImLocation } from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';

import { useStateContext } from '../../contexts/ContextProvider';

import images from '../../assets/images';

import './Navbar.css';
const Navbar = ({data}) => {
	const [showSettings, setShowSettings] = useState(false);
	const toggleSettings = () => {
		setShowSettings(state => !state)
	}


	const {currentCity, setCurrentCity} = useStateContext();


	return (
		<nav>
			<div className='container'>
				<div className='navbar'>
					<div className='citiesList'>
						<Link to={'/cities'} className='cities'>
							<AiOutlinePlusCircle />
						</Link>
					</div>

					<div className='cityLocation'>
						<MdLocationPin className='icon' />{' '}
						<div className='city'>{currentCity}</div>
					</div>
					<div className='update'>
						{' '}
						<div className='dot'></div>Updating
					</div>
					<div className='settings'>
						<button
							className='settings-btn'
							onClick={() => {
								toggleSettings()
							}}
						>
							<HiOutlineDotsVertical />
						</button>

						{showSettings && (
							<div className='settings-list'>
							<ul>
								<li>
									<p>Temperature units</p>
									<select name='' id=''>
										<option value=''>°C</option>
										<option value=''>°F</option>
									</select>
								</li>
								<li>
									<p>Wind speed units</p>
									<select name='' id=''>
										<option value=''>(km/h)</option>
										<option value=''>(m/s)</option>
										<option value=''>(mph)</option>
										<option value=''>(kn)</option>
									</select>
								</li>
								<div className='save-or-cancel'>
									<button className='save'>Save</button>
									<button className='canel'>Cancel</button>
								</div>
							</ul>
						</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
