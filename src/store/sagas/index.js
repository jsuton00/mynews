import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchAllNewsSaga, fetchNewsByCategorySaga } from './newsSaga';

function* watchNews() {
	yield all([
		takeEvery(actionTypes.FETCH_ALL_NEWS, fetchAllNewsSaga),
		takeEvery(actionTypes.FETCH_NEWS_BY_CATEGORY, fetchNewsByCategorySaga),
	]);
}

export default watchNews;
