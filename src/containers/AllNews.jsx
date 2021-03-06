import React, { useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import * as actions from '../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import LatestNews from '../components/LatestNews';
import { compareList, groupBy } from '../utils/arrayUtils';

const AllNews = () => {
	const allNews = useSelector((state) => state.news.filteredNews);
	const selectedNews = useSelector((state) => state.news.selectedNews);
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
	const dispatch = useDispatch();

	const latestNews =
		allNews.length > 0 &&
		[...allNews].sort((a, b) => b.published_date - a.published_date);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchAllNews());
		});

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectedNews) {
				dispatch(actions.addToBookmark(selectedNews));
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, selectedNews]);

	const groupArray = groupBy(allNews, 'section');
	return (
		<>
			{groupArray.world?.length > 0 &&
				groupArray.world.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}
			{groupArray.business?.length > 0 &&
				groupArray.business.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}
			{groupArray.health?.length > 0 &&
				groupArray.health.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}
			{groupArray.science?.length > 0 &&
				groupArray.science.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}
			{groupArray.sports?.length > 0 &&
				groupArray.sports.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}
			{groupArray.technology?.length > 0 &&
				groupArray.technology.map((news, i) => {
					return (
						<NewsCard
							key={i}
							newsId={news.published_date}
							newsTitle={news.title}
							newsCategory={news.section}
							newsSubCategory={news.subsection}
							newsAuthor={news.byline}
							newsImage={news.multimedia}
							newsUrl={news.url}
							selectNews={() => dispatch(actions.selectNews(news.title))}
							bookmarkedNews={compareList(bookmarks, news.title)}
						/>
					);
				})}

			<div className="latest-news-section">
				<LatestNews latestNews={latestNews} />
			</div>
		</>
	);
};

export default AllNews;
