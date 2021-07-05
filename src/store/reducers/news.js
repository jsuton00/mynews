import { searchArray } from '../../utils/arrayUtils';
import { updateObjects } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allNews: [],
	filteredNews: [],
	newsByCategory: [],
	filteredNewsByCategory: [],
	latestAllNews: [],
	latestNews: [],
	category: '',
	searchTerm: '',
	selectedNews: '',
	newsId: '',
	loadingNews: false,
	errorFetchingAllNews: false,
	errorFetchingNews: false,
};

const loadingNews = (state, action) => {
	return updateObjects(state, {
		loadingNews: true,
	});
};

const fetchAllNewsFall = (state, action) => {
	return updateObjects(state, {
		loadingNews: false,
		errorFetchingAllNews: true,
	});
};

const fetchAllNewsSuccess = (state, action) => {
	let allNews = action.allNews.length > 0 && action.allNews.flat(1);

	allNews = [
		...Array.from(new Set(allNews.map(JSON.stringify))).map(JSON.parse),
	];

	return updateObjects(state, {
		allNews: allNews,
		filteredNews: allNews,
		latestAllNews: allNews.sort((a, b) => b.published_date - a.published_date),
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
	let latestNews =
		action.news.length > 0 &&
		action.news.sort((a, b) => b.published_date - a.published_date);
	return updateObjects(state, {
		newsByCategory: action.news,
		filteredNewsByCategory: action.news,
		latestNews: latestNews,
		loadingNews: false,
		errorFetchingNews: false,
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

const setSearchTerm = (state, action) => {
	return updateObjects(state, {
		searchTerm: action.searchTerm,
		loadingNews: false,
	});
};

const searchAllNews = (state, action) => {
	const allNews = state.allNews ? [...state.allNews] : [];
	let filteredNews;

	if (!action.searchTerm || action.searchTerm.length === 0) {
		filteredNews = allNews;
	} else {
		filteredNews = searchArray(allNews, action.searchTerm);
	}

	return updateObjects(state, {
		filteredNews: filteredNews.length > 0 && filteredNews,
		loadingNews: false,
	});
};

const searchNewsByCategory = (state, action) => {
	const newsByCategory = state.newsByCategory ? [...state.newsByCategory] : [];
	let filteredNews;

	if (!action.searchTerm || action.searchTerm.length === 0) {
		filteredNews = [];
	} else {
		filteredNews = searchArray(newsByCategory, action.searchTerm);
	}

	return updateObjects(state, {
		filteredNewsByCategory:
			filteredNews.length > 0 ? filteredNews : newsByCategory,
		loadingNews: false,
	});
};

const selectNews = (state, action) => {
	let selectedNews;

	if (action.newsTitle) {
		selectedNews =
			state.allNews.length > 0 &&
			state.allNews.find((news) => news.title === action.newsTitle);
	}

	return updateObjects(state, {
		selectedNews: selectedNews ? selectedNews : '',
		newsId: action.newsTitle,
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
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.SEARCH_ALL_NEWS:
			return searchAllNews(state, action);
		case actionTypes.SEARCH_NEWS_BY_CATEGORY:
			return searchNewsByCategory(state, action);
		case actionTypes.SELECT_NEWS:
			return selectNews(state, action);
		default:
			return state;
	}
};

export default news;
