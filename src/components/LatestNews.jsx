import React from 'react';
import { formatDateFromNow } from '../utils/formatDateTime';
import { RightArrowIcon } from '../utils/iconsImport';

const LatestNews = (props) => {
	const { latestNews } = props;

	return (
		<div className="latest-news">
			<h5 className="latest-news-header row">
				<span className="outer-circle">
					<span className="inner-circle"></span>
				</span>
				Latest News
			</h5>
			{latestNews && (
				<div className="latest-news-list list-group">
					{latestNews.length > 0 &&
						latestNews.map((news, i) => {
							return (
								<div key={i} className="latest-news-list-item list-item-group">
									<p className="latest-news-published-date row">
										{formatDateFromNow(news.published_date)}
									</p>
									<h5 className="latest-news-title">{news.title}</h5>
								</div>
							);
						})}
				</div>
			)}
			<div className="latest-news-footer row">
				<p className="see-all-news">
					See All News <RightArrowIcon />
				</p>
			</div>
		</div>
	);
};

export default LatestNews;
