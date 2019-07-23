import { all } from 'redux-saga/effects';
import requestSagas from './request/sagas'
import articlesSagas from './articles/sagas'
import commentsSagas from './comments/sagas'

export default function* rootSaga() {
	yield all([
		requestSagas(),
		articlesSagas(),
		commentsSagas(),
	]);
}
