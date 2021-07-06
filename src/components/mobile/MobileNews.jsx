import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { compareList } from '../../utils/arrayUtils';
import LatestNews from '../LatestNews';
import NewsCard from '../NewsCard';

const MobileNews = (props) => {
	const { category, tabKey } = props;

	const news = useSelector((state) => state.news.filteredNewsByCategory);
	const selectedNews = useSelector((state) => state.news.selectedNews);
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
	const dispatch = useDispatch();

	const latestNews =
		news.length > 0 &&
		[...news].sort((a, b) => b.published_date - a.published_date);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (category) {
				return dispatch(actions.fetchNewsByCategory(category));
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [category, dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectedNews) {
				return dispatch(actions.addToBookmark(selectedNews));
			}
		}, 100);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, selectedNews]);

	return (
		<>
			{tabKey === 'featured' ? (
				<Fragment>
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
									newsUrl={news.url}
									selectNews={() => dispatch(actions.selectNews(news.title))}
									bookmarkedNews={compareList(bookmarks, news.title)}
								/>
							);
						})}
				</Fragment>
			) : (
				<div className="latest-news-section">
					<LatestNews latestNews={latestNews} />
				</div>
			)}
		</>
	);
};

export default MobileNews;
