import actions from './actions'
import { SUCCESS, START, ERROR } from '../../constants'

export const articlesReducer = (state = {}, action) => {
	const { type, response, error } = action;

	switch (type) {
		case actions.FETCH_ARTICLES + SUCCESS:
			return response;
		case actions.FETCH_ARTICLES + START:
			return { ...state, loading: true };
		case actions.FETCH_ARTICLES + ERROR:
			return {
				...state, error, loading: false
			};
		default:
			return state;
	}
};

export default {
	articles: articlesReducer
}
