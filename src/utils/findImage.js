import { blankImage } from '../assets';

export const findImage = (arr) => {
	let imgArray = arr ? [...arr] : [];
	let image = '';

	if (imgArray.length > 0) {
		image = imgArray.find((img) => img.format === 'mediumThreeByTwo210').url;
	}

	return image ? image : blankImage;
};
