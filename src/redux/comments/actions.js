const actions = {
	FETCH_ARTICLE_COMMENTS: 'FETCH_ARTICLE_COMMENTS',
	fetchArticleComments: articleId => ({ type: actions.FETCH_ARTICLE_COMMENTS, payload: { articleId } })
};

export default actions
