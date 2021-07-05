import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_CATEGORIES_LINKS } from '../constants/newsCategories';

const NavMenu = (props) => {
	const { isOpen, closeMenu } = props;

	const handleClick = () => {
		if (isOpen === true) {
			closeMenu();
		}
	};
	return (
		<nav className="nav news-category-nav">
			{NEWS_CATEGORIES_LINKS.length > 0 &&
				NEWS_CATEGORIES_LINKS.map((category, index) => {
					return (
						<Link
							key={index}
							to={category.slug === '' ? '/' : `/news/${category.slug}`}
							onClick={handleClick}
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
