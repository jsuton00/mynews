import React from 'react';
import { CloseIcon, ToggleIcon } from '../utils/iconsImport';

const ToggleButton = (props) => {
	const { open, toggle, handleClose, width } = props;

	const handleClick = () => {
		if (width > 992) {
			return handleClose();
		}

		return toggle();
	};
	return (
		<button
			id="toggle-button"
			name="toggle-button"
			onClick={handleClick}
			className="btn toggle-button"
		>
			<span className="toggle-button-icon">
				{open === true ? <CloseIcon /> : <ToggleIcon />}
			</span>
		</button>
	);
};

export default ToggleButton;
