import * as actionTypes from '../actions/actionTypes';
import { updateObjects } from '../../utils/reduxUtils';

const initialState = {
	bookmarks: [],
};

const addToBookmark = (state, action) => {
	let currentBookmarks = state.bookmarks;
	let updatedBookmarks = [];

	if (action.bookmark) {
		updatedBookmarks = [...currentBookmarks, action.bookmark];
	}

	updatedBookmarks = Array.from(
		new Set(updatedBookmarks.map(JSON.stringify)),
	).map(JSON.parse);

	return updateObjects(state, {
		bookmarks: updatedBookmarks.length > 0 && updatedBookmarks,
	});
};

const removeBookmark = (state, action) => {
	const bookmarks = state.bookmarks;
	let updatedBookmarks;

	if (action.newsTitle) {
		updatedBookmarks =
			bookmarks.length > 0 &&
			bookmarks.map((bookmark) => bookmark.newsTitle !== action.newsTitle);
	}

	return updateObjects(state, {
		bookmarks: updatedBookmarks.length > 0 ? [...updatedBookmarks] : [],
	});
};

const bookmarks = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_BOOKMARK:
			return addToBookmark(state, action);
		case actionTypes.REMOVE_BOOKMARK:
			return removeBookmark(state, action);
		default:
			return state;
	}
};

export default bookmarks;
