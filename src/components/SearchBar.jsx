import React from 'react';
import SearchForm from './SearchForm';
import ToggleButton from './ToggleButton';
import { useViewportContext } from '../hooks/useViewport';
import BrandLogo from './BrandLogo';

const SearchBar = (props) => {
	const { open } = props;
	const [width] = useViewportContext();
	return (
		<div className="search-bar container row">
			<div className="search-bar-section app-brand-name">
				{open ? <></> : <BrandLogo />}
				{width <= 992 ? <ToggleButton width={width} {...props} /> : ''}
			</div>
			<div className="search-bar-section search-form-section">
				<SearchForm />
			</div>
		</div>
	);
};

export default SearchBar;
