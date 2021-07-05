import React, { useState } from 'react';
import PopUpMessageBar from './PopUpMessageBar';
import SearchBar from './SearchBar';

const Header = (props) => {
	const [openedPopUp, setOpenedPopUp] = useState(true);

	const closePopUpMessageBar = () => setOpenedPopUp(false);
	return (
		<header id="header" className="header container-fluid">
			{openedPopUp === true ? (
				<PopUpMessageBar closePopUp={closePopUpMessageBar} />
			) : (
				<></>
			)}
			<SearchBar {...props} />
		</header>
	);
};

export default Header;
