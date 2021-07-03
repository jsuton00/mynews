import React from 'react';
import AllNews from '../components/AllNews';

const HomePage = () => {
	return (
		<div className="news-page home-page container-fluid">
			<div className="news-page-content container">
				<AllNews />
			</div>
		</div>
	);
};

export default HomePage;
