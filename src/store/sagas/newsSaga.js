import * as actions from '../actions/index';
import * as api from '../../apis/news';
import { put, call } from '@redux-saga/core/effects';

export function* fetchAllNewsSaga(action) {
	try {
		yield put(actions.loadingNews());
		const response = yield call(api.fetchAllNews);
		yield put(actions.fetchAllNewsSuccess(response));
	} catch (err) {
		yield put(actions.fetchAllNewsFall());
	}
}

export function* fetchNewsByCategorySaga(action) {
	try {
		yield put(actions.loadingNews());
		let response;

		if (action.category === 'home') {
			response = yield call(api.fetchAllNews);
			yield put(actions.fetchAllNewsSuccess(response));
		} else {
			response = yield call(api.fetchNewsByCategory, action.category);
			yield put(actions.fetchNewsByCategorySuccess(response.data.results));
		}
	} catch (err) {
		yield put(actions.fetchNewsByCategoryFail());
	}
}
