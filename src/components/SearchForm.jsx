import React, { useRef } from 'react';
import { SearchIcon } from '../utils/iconsImport';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';

const SearchForm = (props) => {
	const { searchTerm, setSearchTerm, searchAllNews, searchNews } = props;

	let location = useLocation();

	const inputRef = useRef();

	const handleChange = (e) => {
		e.persist();
		return setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm === inputRef.current.value) {
			if (e.key === 'Enter') {
				if (location.pathname !== '/') {
					return searchNews(searchTerm);
				} else {
					return searchAllNews(searchTerm);
				}
			}
		}
	};

	return (
		<form
			id="search-form"
			name="search-form"
			onSubmit={handleSubmit}
			onKeyUp={handleSubmit}
			className="search-form row"
		>
			<span className="search-icon">
				<SearchIcon />
			</span>
			<input
				ref={inputRef}
				id="search-input"
				name="search-input"
				type="text"
				className="search-input"
				onChange={handleChange}
				placeholder="Search news"
				value={searchTerm}
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

const mapStateToProps = (state) => ({
	searchTerm: state.news.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
	setSearchTerm: (searchTerm) => dispatch(actions.setSearchTerm(searchTerm)),
	searchAllNews: (searchTerm) => dispatch(actions.searchAllNews(searchTerm)),
	searchNews: (searchTerm) =>
		dispatch(actions.searchNewsByCategory(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
