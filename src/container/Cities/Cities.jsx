import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { options, geoUrl, geoKey } from '../../api';
import './Cities.css';
import {
	FaLongArrowAltLeft,
	FaSearchLocation,
	FaTrashAlt,
	FaPlus,
} from 'react-icons/fa';

import { useStateContext } from '../../contexts/ContextProvider';



const Cities = () => {
	const { inputList, setInputList } = useStateContext();
	const { currentCity, setCurrentCity } = useStateContext();


	


	useEffect(() => {
		const addCity = event => {
		  if (event.keyCode === 13) {
			event.preventDefault();
			handleAddInput()
		  }
		};
		document.addEventListener("keydown", addCity);
		return () => {
		  document.removeEventListener("keydown", addCity);
		};
	  }, []);







	////////////////Create new element in list///////////////////////////////////////
	useEffect(() => {
		let citiesBox = document.querySelector('.citiesBox');
		const checkClick = e => {
			if (e.target.closest('div').classList.contains('cityName')) {
				setCurrentCity(e.target.closest('div').innerText);
			}
		};
		citiesBox.addEventListener('click', checkClick);
		return () => {
			citiesBox.removeEventListener('click', checkClick);
		};
	});

	const handleAddInput = () => {
		let cityInput = document.querySelector('.citySearch');
		if(cityInput.value !== ''){
			setInputList([...inputList, cityInput.value]);
		setCurrentCity(cityInput.value);
		cityInput.value = '';
		}else{
			return;
		}
	};
	const handleRemoveInput = index => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};
	////////////////////////////////////////////////////////////////////////////////
	return (
		<div className='cities'>
			<div className='container'>
				<div className='citiesList'>
					<Link to={'/'} className='arrow'>
						<FaLongArrowAltLeft />
					</Link>
					<h2>Manage cities</h2>

					<div className='searchForCity'>
						<input
							className='citySearch'
							type='text'
							placeholder='Enter location'
						/>
						<button
							className='searchIcon'
							onClick={() => {
								handleAddInput();
							}}
						>
							<FaSearchLocation />
						</button>
					</div>

					<div className='citiesBox'>
						{inputList.map((key, index) => {
							return (
								<div className='box' key={index}>
									<Link to={'/'} className='link'>
										<div className='city'>
											<div className='cityName'>{inputList[index]}</div>
										</div>
									</Link>
									<div className='trashbin'>
										<FaTrashAlt onClick={() => handleRemoveInput(index)} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cities;
