import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';

import { units } from '../../redux/actions';
import styles from './Navbar.module.scss';


const Navbar = ({ data }) => {
	const dispatch = useDispatch();

	const [showSettings, setShowSettings] = useState(false);
	const toggleSettings = () => {
		setShowSettings(state => !state);
	};

	const unit = useSelector(state => state.units);
	const unitChanges = useRef(null);
	const currentCity = useSelector(state => state.currentCity);

	const changeFunc = () => {
		let unit = unitChanges.current;
		let unitValue = unit;
		let currentValue = unitValue.options[unit.selectedIndex].value;
		dispatch(units(currentValue));
	};

	return (
		<nav>
			<div className={styles.container}>
				<div className={styles.navbar}>
					<div className={styles.citiesList}>
						<Link to={'/cities'} className={styles.cities}>
							<AiOutlinePlusCircle />
						</Link>
					</div>

					<div className={styles.cityLocation}>
						<MdLocationPin className={styles.icon} />{' '}
						{data.name !== '' ? (
							<div className={styles.city}>{data.name}</div>
						) : (
							<div className={styles.city}>{currentCity}</div>
						)}
					</div>
					<div className={styles.settings}>
						<button
							className={styles.settingsBtn}
							onClick={() => {
								toggleSettings();
							}}
						>
							<HiOutlineDotsVertical />
						</button>

						{showSettings && (
							<div className={styles.settingsList}>
								<ul>
									<li>
										<p>Units</p>
										<select
											ref={unitChanges}
											defaultValue={unit}
											className={styles.unitChange}
											onChange={() => changeFunc()}
										>
											<option value='metric'>Metrical</option>
											<option value='imperial'>Imperial</option>
										</select>
									</li>
									<div className={styles.saveOrCancel}>
										<button
											className={styles.save}
											onClick={() => {
												toggleSettings();
											}}
										>
											OK
										</button>
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
