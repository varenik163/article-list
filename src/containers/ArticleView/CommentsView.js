import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/comments/actions'
import Loader from "../../components/Loader";
import CommentsList from "../../components/CommentsList";

const { fetchArticleComments } = actions;

function CommentsView(props) {
	const { comments, loading } = props;

	useEffect(() => {
		props.fetchArticleComments(props.articleId)
	}, []);

	return (
		<div>
			{ loading && <Loader /> }
			<CommentsList comments={comments || []} />
		</div>
	);
}

const selectComments = (state, articleId) => state.comments[articleId];

const mapStateToProps = (state, props) => ({
	comments: selectComments(state, props.articleId),
	loading: state.comments.loading
});

export default connect(mapStateToProps, { fetchArticleComments })(CommentsView)
