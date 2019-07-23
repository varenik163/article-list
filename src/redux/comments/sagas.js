import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions'
import reqActions from '../request/actions'

export function* fetchArticleCommentsSaga(action) {
	const { payload } = action;
	yield put(reqActions.request({
		...action,
		method: 'GET',
		auth: true,
		url: `http://jsonplaceholder.typicode.com/comments?postId=${payload.articleId}`,
		payload
	}))
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.FETCH_ARTICLE_COMMENTS, fetchArticleCommentsSaga)
	]);
}
