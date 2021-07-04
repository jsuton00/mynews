import { combineReducers } from 'redux';
import news from './news';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
	news,
	bookmarks,
});

export default rootReducer;
