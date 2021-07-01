import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_CATEGORIES } from '../constants/newsCategories';

const NavMenu = () => {
	return (
		<nav className="nav news-category-nav">
			{NEWS_CATEGORIES.length > 0 &&
				NEWS_CATEGORIES.map((category, index) => {
					return (
						<Link
							key={index}
							to={category.slug === '' ? '/' : `/news/:${category.slug}`}
							className="news-category-nav-link"
						>
							<div className="news-category-nav-link-item">
								<span className="news-category-icon">{category.icon}</span>
								<span className="news-category-text">{category.category}</span>
							</div>
						</Link>
					);
				})}
		</nav>
	);
};

export default NavMenu;
