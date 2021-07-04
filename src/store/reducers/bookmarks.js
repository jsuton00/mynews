import * as actionTypes from '../actions/actionTypes';
import { updateObjects } from '../../utils/reduxUtils';

const initialState = {
	bookmarks: [],
};

const bookmarks = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default bookmarks;
