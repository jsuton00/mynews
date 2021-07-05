import React from 'react';
import BrandLogo from '../BrandLogo';
import NavMenu from '../NavMenu';
import SearchForm from '../SearchForm';

const NavModal = (props) => {
	const { isOpen, close } = props;
	return (
		<div className="nav-modal container-fluid">
			<div className="nav-modal-container container">
				<div className="app-brand-name">
					<BrandLogo isOpen={isOpen} closeAndRedirect={close} />
				</div>
				<SearchForm isOpen={isOpen} closeForm={close} />
				<NavMenu closeMenu={close} />
			</div>
		</div>
	);
};

export default NavModal;
