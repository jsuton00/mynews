import * as actionTypes from './actionTypes';

export const addToBookmark = (bookmark) => ({
	type: actionTypes.ADD_TO_BOOKMARK,
	bookmark,
});

export const removeBookmark = (newsTitle) => ({
	type: actionTypes.REMOVE_BOOKMARK,
	newsTitle,
});
