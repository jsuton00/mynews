import React from 'react';
import { findImage } from '../utils/findImage';

const NewsCard = (props) => {
	const {
		newsId,
		newsTitle,
		newsCategory,
		newsSubCategory,
		newsAuthor,
		newsImage,
	} = props;

	return (
		<div id={newsId} className="news-card card">
			<img
				src={findImage(newsImage)}
				alt={newsTitle}
				className="news-card-img card-img-top"
			/>
			<div className="news-card-body card-body">
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
