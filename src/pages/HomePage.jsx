import React from 'react';
import AllNews from '../containers/AllNews';
import NewsPageHeader from '../components/layouts/NewsPageHeader';
import { useViewportContext } from '../hooks/useViewport';
import NavTabs from '../components/mobile/NavTabs';
import FeaturedNews from '../containers/FeaturedNews';

const HomePage = () => {
	const [width] = useViewportContext();
	return (
		<div className="news-page home-page container-fluid">
			<div
				className={`news-page-${
					width <= 829 ? 'mobile' : 'desktop'
				}-display container-fluid`}
			>
				{width <= 829 ? (
					<div className="news-page-content container">
						<NavTabs />
					</div>
				) : (
					<>
						<NewsPageHeader />
						<div className="news-page-content container">
							<FeaturedNews />
							<AllNews />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default HomePage;
