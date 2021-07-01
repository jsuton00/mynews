import React from 'react';
import { SearchIcon } from '../utils/iconsImport';

const SearchForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			id="search-form"
			name="search-form"
			onSubmit={handleSubmit}
			className="search-form row"
		>
			<span className="search-icon">
				<SearchIcon />
			</span>
			<input
				id="search-input"
				name="search-input"
				type="text"
				className="search-input"
				placeholder="Search news"
			/>
			<button
				id="submitSearch"
				name="submitSearch"
				type="submit"
				className="btn search-btn"
			>
				Search
			</button>
		</form>
	);
};

export default SearchForm;
