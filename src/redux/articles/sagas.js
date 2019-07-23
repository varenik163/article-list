import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions'
import reqActions from '../request/actions'

export function* fetchArticlesSaga(action) {
	yield put(reqActions.request({
		...action,
		method: 'GET',
		auth: true,
		url: `http://jsonplaceholder.typicode.com/posts?limit=20`
	}))
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.FETCH_ARTICLES, fetchArticlesSaga)
	]);
}
