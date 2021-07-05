import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = (props) => {
	const { isOpen, closeAndRedirect } = props;

	const handleClick = () => {
		if (isOpen === true) {
			return closeAndRedirect();
		}

		return;
	};
	return (
		<Link to="/" onClick={handleClick}>
			<h1 className="brand-name">
				<span>My</span>
				<span>News</span>
			</h1>
		</Link>
	);
};

export default BrandLogo;
