import React, { useRef } from 'react';
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
		newsUrl,
		selectNews,
		bookmarkedNews,
		featured,
	} = props;

	const newsCardRef = useRef();

	const handleClick = (e) => {
		if (e.target.value === newsCardRef.current.value) {
			return selectNews(e.target.value);
		}
	};

	return (
		<div ref={newsCardRef} id={newsId} className="news-card card">
			<a
				href={newsUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Click to read the news."
			>
				<img
					src={findImage(newsImage)}
					alt={newsTitle}
					className="news-card-img card-img-top"
				/>
				<div className="news-card-body card-body">
					{featured ? (
						<p className="featured-news card-text">Featured</p>
					) : (
						<> </>
					)}
					<button
						ref={newsCardRef}
						type="button"
						className={`btn add-to-bookmark-btn ${
							bookmarkedNews || featured ? 'bookmarked' : ''
						}`}
						onClick={handleClick}
						value={newsTitle}
					>
						<span
							ref={newsCardRef}
							className="add-to-bookmark-btn-icon"
							value={newsTitle}
						>
							<BookmarkIcon />
						</span>
					</button>
					<p className="news-category card-text">{`${newsCategory} ${
						newsSubCategory ? `- ${newsSubCategory}` : ''
					}`}</p>
					<h5 className="news-title card-title">{newsTitle}</h5>
					<p className="news-author card-text">{newsAuthor}</p>
				</div>
			</a>
		</div>
	);
};

export default NewsCard;
