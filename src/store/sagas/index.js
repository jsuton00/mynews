import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchAllNewsSaga } from './newsSaga';

function* watchNews() {
	yield all([takeEvery(actionTypes.FETCH_ALL_NEWS, fetchAllNewsSaga)]);
}

export default watchNews;
