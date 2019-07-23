// import regeneratorRuntime from 'regenerator-runtime'
import { takeEvery, all, put, call } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import { SUCCESS, ERROR, START } from '../../constants'

export function* requestSaga(action) {
	const {
		payload, method, url, auth, oldType: type,
	} = action;

	const token = '10ea4e2da2e495b049faeb7bd34f1127';

	try {
		yield put({
			...action,
			type: type + START
		});

		const body = payload ? JSON.stringify(payload) : '';
		const headers = new Headers({ 'Content-Type': 'application/json' });
		if (auth) headers.set('Authorization', 'Bearer ' + token);

		const params = {
			method,
			headers,
			mode: 'cors'
		};

		if (body && method !== 'GET') params.body = body;

		const data = yield call(
			fetch,
			url,
			params
		);

		const response = yield data.json();

		if (data.status !== 200 || (data.status === 200 && response.status === 100)) {
			const error = getError(data, response);
			yield put({
				...action,
				type: type + ERROR,
				error
			})
		} else {
			yield put({
				...action,
				type: type + SUCCESS,
				response: {
					data: response,
					status: 0,
				}
			});
		}
	} catch (err) {
		console.log(err)
	}
}


export const getError = (data, response) => {
	if (data.status === 0) return {
		message: 'Unknow error: check your authorization. ' +
			'No \'Access-Control-Allow-Origin\' header is present on the requested resource.'
	};
	if (data.status === 500) return response;
	if (response.messages) return response.messages[0];

	return ''
};

export default function* rootSaga() {
	yield all([
		takeEvery('REQUEST', requestSaga),
	]);
}
