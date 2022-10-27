import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { MdLocationPin } from 'react-icons/md';

import { useStateContext } from '../../contexts/ContextProvider';





import './Navbar.css';
const Navbar = ({data}) => {
	const [showSettings, setShowSettings] = useState(false);
	const toggleSettings = () => {
		setShowSettings(state => !state)
	}


	const {currentCity, setCurrentCity} = useStateContext();
	const {metorimp, setMetorimp} = useStateContext();



	function changeFunc(){
		let unit = document.querySelector('.unitChange')
		let unitValue = unit 
		setMetorimp(unitValue.options[unit.selectedIndex].value)
	}
	



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
						{data.name !== '' ? <div className='city'>{data.name}</div> : <div className='city'>{currentCity}</div>}
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
									<p>Units</p>
									<select defaultValue={metorimp} className='unitChange' name='' id='' onChange={() => changeFunc()}>
										<option value='metric'>Metrical</option>
										<option value='imperial'>Imperial</option>
									</select>
								</li>
								<div className='save-or-cancel'>
									<button className='save' onClick={() => {toggleSettings()}}>OK</button>
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
