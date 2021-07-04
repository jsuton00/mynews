import React, { useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import LatestNews from '../components/LatestNews';
import { groupBy } from '../utils/arrayUtils';

const AllNews = (props) => {
	const { allNews, getAllNews, latestNews, selectNews } = props;

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
			{allNews.world?.length > 0 &&
				allNews.world.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
						/>
					);
				})}
			{allNews.business?.length > 0 &&
				allNews.business.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
						/>
					);
				})}
			{allNews.health?.length > 0 &&
				allNews.health.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
						/>
					);
				})}
			{allNews.science?.length > 0 &&
				allNews.science.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
						/>
					);
				})}
			{allNews.sports?.length > 0 &&
				allNews.sports.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
						/>
					);
				})}
			{allNews.technology?.length > 0 &&
				allNews.technology.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							selectNews={() => selectNews(news.title)}
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
	allNews:
		state.news.filteredNews.length > 0 &&
		groupBy(state.news.filteredNews, 'section'),
	latestNews:
		state.news.filteredNews.length > 0 &&
		state.news.filteredNews.sort(
			(a, b) => new Date(b.published_date) - new Date(a.published_date),
		),
});

const mapDispatchToProps = (dispatch) => ({
	getAllNews: () => dispatch(actions.fetchAllNews()),
	selectNews: (newsTitle) => dispatch(actions.selectNews(newsTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
