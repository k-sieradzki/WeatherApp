import React from 'react';

import './Loading.css'
const Loading = () => {
	return (
		<>
			<div className='loading'>
				<div className='container'>
					<p className='info'>Loading...
					<div className="circle"></div>
					</p>
					
				</div>
			</div>
		</>
	);
};

export default Loading;
