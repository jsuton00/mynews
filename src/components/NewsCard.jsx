import React, { useRef, useState } from 'react';
import { findImage } from '../utils/findImage';
import { BookmarkIcon } from '../utils/iconsImport';

const NewsCard = (props) => {
	const {
		newsId,
		newsTitle,
		newsCategory,
		newsSubCategory,
		newsAuthor,
		newsImage,
		selectNews,
	} = props;

	const newsCardRef = useRef();
	const [bookmarked, setBookmarked] = useState(false);

	const handleSelect = (e) => {
		return selectNews(e.target.value);
	};

	return (
		<div ref={newsCardRef} id={newsId} className="news-card card">
			<img
				src={findImage(newsImage)}
				alt={newsTitle}
				className="news-card-img card-img-top"
			/>
			<div className="news-card-body card-body">
				<div
					ref={newsCardRef}
					className="btn add-to-bookmark-btn"
					onClick={handleSelect}
					value={newsTitle}
				>
					<span className="add-to-bookmark-btn-icon">
						<BookmarkIcon />
					</span>
				</div>
				<p className="news-category card-text">{`${newsCategory} ${
					newsSubCategory ? `- ${newsSubCategory}` : ''
				}`}</p>
				<h5 className="news-title card-title">{newsTitle}</h5>
				<p className="news-author card-text">{newsAuthor}</p>
			</div>
		</div>
	);
};

export default NewsCard;
