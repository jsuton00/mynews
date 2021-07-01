import React, { useState } from 'react';
import PopUpMessageBar from './PopUpMessageBar';

const Header = () => {
	const [openedPopUp, setOpenedPopUp] = useState(true);

	const closePopUpMessageBar = () => setOpenedPopUp(false);
	return (
		<header id="header" className="header container-fluid">
			{openedPopUp === true ? (
				<PopUpMessageBar closePopUp={closePopUpMessageBar} />
			) : (
				<></>
			)}
		</header>
	);
};

export default Header;
