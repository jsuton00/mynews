import { useState } from 'react';

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		return setIsOpen(!isOpen);
	};

	const handleClose = () => setIsOpen(false);

	return [isOpen, handleToggle, handleClose];
};
