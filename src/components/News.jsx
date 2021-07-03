import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import LatestNews from './LatestNews';
import NewsCard from './NewsCard';

const News = (props) => {
	const { news, getNews, category } = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			if (category) {
				return getNews(category);
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [category, getNews]);

	return (
		<>
			{news.length > 0 &&
				news.map((news, i) => {
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
				<LatestNews />
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	news: state.news.newsByCategory,
});

const mapDispatchToProps = (dispatch) => ({
	getNews: (category) => dispatch(actions.fetchNewsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
