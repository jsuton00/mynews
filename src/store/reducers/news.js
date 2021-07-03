import { updateObjects } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allNews: [],
	newsByCategory: [],
	category: '',
	loadingNews: false,
	errorFetchingAllNews: false,
	errorFetchingNews: false,
};

const loadingNews = (state, action) => {
	return updateObjects(state, {
		loadingNews: true,
	});
};

const selectNewsCategory = (state, action) => {
	let category = '';
	if (action.category === '') {
		category = 'home';
	} else if (action.category === 'general') {
		category = 'world';
	} else {
		category = action.category;
	}

	return updateObjects(state, {
		category: category,
	});
};

const fetchAllNewsFall = (state, action) => {
	return updateObjects(state, {
		loadingNews: false,
		errorFetchingAllNews: true,
	});
};

const fetchAllNewsSuccess = (state, action) => {
	return updateObjects(state, {
		allNews: action.allNews.length > 0 && action.allNews.flat(1),
		loadingNews: false,
		errorFetchingAllNews: false,
	});
};

const fetchNewsByCategoryFail = (state, action) => {
	return updateObjects(state, {
		loadingNews: false,
		errorFetchingNews: true,
	});
};

const fetchNewsByCategorySuccess = (state, action) => {
	return updateObjects(state, {
		newsByCategory: action.news,
		loadingNews: false,
		errorFetchingNews: false,
	});
};

const news = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_NEWS:
			return loadingNews(state, action);
		case actionTypes.FETCH_ALL_NEWS_FAIL:
			return fetchAllNewsFall(state, action);
		case actionTypes.FETCH_ALL_NEWS_SUCCESS:
			return fetchAllNewsSuccess(state, action);
		case actionTypes.FETCH_NEWS_BY_CATEGORY_FAIL:
			return fetchNewsByCategoryFail(state, action);
		case actionTypes.FETCH_NEWS_BY_CATEGORY_SUCCESS:
			return fetchNewsByCategorySuccess(state, action);
		case actionTypes.SELECT_NEWS_CATEGORY:
			return selectNewsCategory(state, action);
		default:
			return state;
	}
};

export default news;
