import React from 'react';
import News from '../components/News';

const HomePage = () => {
	return (
		<div className="news-page home-page container-fluid">
			<div className="news-page-content container">
				<News />
			</div>
		</div>
	);
};

export default HomePage;
