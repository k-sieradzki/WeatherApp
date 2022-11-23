import React from 'react';
import styles from './Loading.module.scss'

const Loading = () => {
	return (
		<>
			<div className={styles.loading}>
				<div className={styles.container}>
					<div className={styles.info}>Loading...
					<div className={styles.circle}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loading;
