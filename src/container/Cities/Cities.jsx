import React, { useEffect, useRef } from 'react';
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
	const citiSearchRef = useRef(null);
	const citiesList = useSelector(state => state.citiesList);

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
		let cityInput = citiSearchRef.current;
		if (cityInput.value !== '') {
			dispatch(currentCity(cityInput.value));
			dispatch(addCity(cityInput.value));
			cityInput.value = '';
		} else {
			return;
		}
	};

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
							ref={citiSearchRef}
							className={styles.citySearch}
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
									<div className={styles.trashbin}>
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
