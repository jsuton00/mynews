import * as actionTypes from './actionTypes';

export const loadingNews = () => ({
	type: actionTypes.LOADING_NEWS,
});

export const fetchAllNews = () => ({
	type: actionTypes.FETCH_ALL_NEWS,
});

export const fetchAllNewsFall = () => ({
	type: actionTypes.FETCH_ALL_NEWS_FAIL,
});

export const selectNewsCategory = (category) => ({
	type: actionTypes.SELECT_NEWS_CATEGORY,
	category,
});

export const fetchAllNewsSuccess = (allNews) => ({
	type: actionTypes.FETCH_ALL_NEWS_SUCCESS,
	allNews,
});

export const fetchNewsByCategory = (category) => ({
	type: actionTypes.FETCH_NEWS_BY_CATEGORY,
	category,
});

export const fetchNewsByCategoryFail = () => ({
	type: actionTypes.FETCH_NEWS_BY_CATEGORY_FAIL,
});

export const fetchNewsByCategorySuccess = (news) => ({
	type: actionTypes.FETCH_NEWS_BY_CATEGORY_SUCCESS,
	news,
});

export const setSearchTerm = (searchTerm) => ({
	type: actionTypes.SET_SEARCH_TERM,
	searchTerm,
});

export const searchAllNews = (searchTerm) => ({
	type: actionTypes.SEARCH_ALL_NEWS,
	searchTerm,
});

export const searchNewsByCategory = (searchTerm) => ({
	type: actionTypes.SEARCH_NEWS_BY_CATEGORY,
	searchTerm,
});

export const selectNews = (newsTitle) => ({
	type: actionTypes.SELECT_NEWS,
	newsTitle,
});
