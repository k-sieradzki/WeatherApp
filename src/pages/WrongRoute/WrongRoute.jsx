import React from 'react';
import { Link } from 'react-router-dom';
import { GiBackwardTime } from 'react-icons/gi';

import styles from './WrongRoute.module.scss'

const WrongRoute = () => {
	return (
		<>
			<div className={styles.wrongRoute}>
				<div className={styles.container}>
					<span className={styles.error}>404</span>
					<p className={styles.erorInfo}>This page doesn't exist.</p>
					<Link to={'/'} className={styles.link}>
						<GiBackwardTime className={styles.backBtn}/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default WrongRoute;
