import React, { useEffect } from 'react';
import NewsCard from './NewsCard';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import LatestNews from './LatestNews';

const AllNews = (props) => {
	const { allNews, getAllNews, latestNews } = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			getAllNews();
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [getAllNews]);
	return (
		<>
			{allNews.length > 0 &&
				allNews.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
						/>
					);
				})}
			<div className="latest-news-section">
				<LatestNews latestNews={latestNews} />
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	allNews: state.news.allNews,
	latestNews:
		state.news.allNews.length > 0 &&
		state.news.allNews.sort((a, b) => b.published_date - a.published_date),
});

const mapDispatchToProps = (dispatch) => ({
	getAllNews: () => dispatch(actions.fetchAllNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
