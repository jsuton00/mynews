import React from 'react';
import AllNews from '../containers/AllNews';
import NewsPageHeader from '../components/layouts/NewsPageHeader';

const HomePage = () => {
	return (
		<div className="news-page home-page container-fluid">
			<NewsPageHeader />
			<div className="news-page-content container">
				<AllNews />
			</div>
		</div>
	);
};

export default HomePage;
