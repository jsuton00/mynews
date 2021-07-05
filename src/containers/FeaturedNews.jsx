import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { compareList } from '../utils/arrayUtils';

const FeaturedNews = () => {
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
	const allNews = useSelector((state) => state.news.allNews);
	return (
		<>
			{bookmarks &&
				bookmarks.length > 0 &&
				bookmarks.map((bookmark, i) => {
					return (
						<NewsCard
							key={i}
							newsId={bookmark.published_date}
							newsTitle={bookmark.title}
							newsCategory={bookmark.section}
							newsSubCategory={bookmark.subsection}
							newsAuthor={bookmark.byline}
							newsImage={bookmark.multimedia}
							featured={compareList(allNews, bookmark.title)}
						/>
					);
				})}
		</>
	);
};

export default FeaturedNews;
