import React from 'react';

const LatestNews = () => {
	return (
		<div className="latest-news">
			<h5 className="latest-news-header row">
				<span className="outer-circle">
					<span className="inner-circle"></span>
				</span>
				Latest News
			</h5>
			<div className="latest-news-list">News</div>
			<div className="latest-news-footer see-all-news">See All News</div>
		</div>
	);
};

export default LatestNews;
