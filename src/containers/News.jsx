import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import LatestNews from '../components/LatestNews';
import NewsCard from '../components/NewsCard';

const News = (props) => {
	const { news, getNews, category, latestNews, selectNews } = props;

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
							selectNews={() => selectNews(news)}
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
	news: state.news.filteredNewsByCategory,
	latestNews:
		state.news.filteredNewsByCategory.length > 0 &&
		state.news.filteredNewsByCategory.sort(
			(a, b) => new Date(b.published_date) - new Date(a.published_date),
		),
});

const mapDispatchToProps = (dispatch) => ({
	getNews: (category) => dispatch(actions.fetchNewsByCategory(category)),
	selectNews: (publishedDate) => dispatch(actions.selectNews(publishedDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
