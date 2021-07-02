import React from 'react';
import { blankImage } from '../assets';

const NewsCard = (props) => {
	const { newsId, newsTitle, newsSource, newsAuthor, newsImage } = props;
	return (
		<div id={newsId} className="news-card card">
			<img
				src={newsImage ? newsImage : blankImage}
				alt={newsTitle}
				className="news-card-img card-img-top"
			/>
			<div className="news-card-body card-body">
				<p className="news-source card-text">{newsSource && newsSource.name}</p>
				<h5 className="news-title card-title">{newsTitle}</h5>
				<p className="news-author card-text">{newsAuthor}</p>
			</div>
		</div>
	);
};

export default NewsCard;
