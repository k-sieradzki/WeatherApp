import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	FaLongArrowAltLeft,
	FaSearchLocation,
	FaTrashAlt,
} from 'react-icons/fa';
import { addCity, removeCity, currentCity } from '../../redux/actions';
import styles from './Cities.module.scss';


const Cities = () => {
	const dispatch = useDispatch();
	const citiesBoxRef = useRef(null);
	const citiesList = useSelector(state => state.citiesList);
	const [citiSearch, setCitiSearch] = useState('');

	//////////////////Enter check//////////////////////////////
	useEffect(() => {
		const addCity = event => {
			if (event.keyCode === 13) {
				event.preventDefault();
				handleAddInput();
			}
		};
		document.addEventListener('keydown', addCity);
		return () => {
			document.removeEventListener('keydown', addCity);
		};
	});

	////////////////Create and remove element in list///////////////////////////////////////
	useEffect(() => {
		let citiesBox = citiesBoxRef.current;
		const checkClick = e => {
			if (e.target.closest('div').classList.contains(`${styles.cityName}`)) {
				dispatch(currentCity(e.target.closest('div').innerText));
			}
		};
		citiesBox.addEventListener('click', checkClick);
		return () => {
			citiesBox.removeEventListener('click', checkClick);
		};
	});


	const handleAddInput = () => {
		if(citiSearch !== ''){
			dispatch(currentCity(citiSearch));
	 		dispatch(addCity(citiSearch));
			setCitiSearch('')
		}else{
			return
		}
	}

	const handleRemoveInput = index => {
		const list = [...citiesList];
		list.splice(index, 1);
		dispatch(removeCity(list));
	};
	////////////////////////////////////////////////////////////////////////////////
	return (
		<div className={styles.cities}>
			<div className={styles.container}>
				<div className={styles.citiesList}>
					<Link to={'/'} className={styles.arrow}>
						<FaLongArrowAltLeft />
					</Link>
					<h2>Manage cities</h2>
					<div className={styles.searchForCity}>
						<input
							onChange={(e) => {setCitiSearch(e.target.value)}}
							className={styles.citySearch}
							value={citiSearch}
							type='text'
							placeholder='Example: London'
						/>

						<button
							className={styles.searchIcon}
							onClick={() => {
								handleAddInput();
							}}
						>
							<FaSearchLocation />
						</button>
					</div>

					<div ref={citiesBoxRef} className={styles.citiesBox}>
						{citiesList.map((key, index) => {
							return (
								<div className={styles.box} key={index}>
									<Link to={'/'} className={styles.link}>
										<div className={styles.city}>
											<div className={styles.cityName}>
												{citiesList[index].charAt(0).toUpperCase() +
													citiesList[index].slice(1)}
											</div>
										</div>
									</Link>
									<div className={styles.trashbin} onClick={() => handleRemoveInput(index)}>
										<FaTrashAlt/>
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
