import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

const SearchBar = () => {
	return (
		<div className="search-bar container row">
			<div className="search-bar-section app-brand-name">
				<Link to="/">
					<h1 className="brand-name">
						<span>My</span>
						<span>News</span>
					</h1>
				</Link>
			</div>
			<div className="search-bar-section search-form-section">
				<SearchForm />
			</div>
		</div>
	);
};

export default SearchBar;
