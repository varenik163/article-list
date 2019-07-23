import actions from './actions'
import { SUCCESS, START, ERROR } from '../../constants'

export const commentsReducer = (state = {}, action) => {
	const { type, payload, response, error } = action;

	switch (type) {
		case actions.FETCH_ARTICLE_COMMENTS + SUCCESS:
			return {
				...state,
				[payload.articleId]: response.data,
				loading: false
			};
		case actions.FETCH_ARTICLE_COMMENTS + START:
			return { ...state, loading: true };
		case actions.FETCH_ARTICLE_COMMENTS + ERROR:
			return {
				...state, error, loading: false
			};
		default:
			return state;
	}
};

export default {
	comments: commentsReducer
}
