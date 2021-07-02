import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import NewsCard from './NewsCard';

const News = (props) => {
	const { allNews, getAllNews, getNews, category } = props;

	useEffect(() => {
		if (category) {
			return getNews(category);
		} else {
			return getAllNews();
		}
	}, [category, getAllNews, getNews]);

	return (
		<>
			{allNews.length > 0 &&
				allNews.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.publishedAt}
							newsTitle={news.title}
							newsSource={news.source}
							newsAuthor={news.author}
							newsImage={news.urlToImage}
						/>
					);
				})}

			<div className="latest-news">Latest News</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	allNews: state.news.allNews,
});

const mapDispatchToProps = (dispatch) => ({
	getAllNews: () => dispatch(actions.fetchAllNews()),
	getNews: (category) => dispatch(actions.fetchNewsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
