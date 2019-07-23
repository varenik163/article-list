import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import CommentsView from "./CommentsView";
import Article from "../../components/Article";

function ArticleView (props) {
	const { article } = props;
	const [commentsAreOpen, setCommentsAreOpen] = useState(false);

	useEffect(() => {
		document.title = article ? article.title : document.title
	}, []);

	if (!article) return <Redirect to={'/'} />;

	return (
		<div>
			<div>
				<Article article={article} />
				{ commentsAreOpen
					? <div>
						<strong className={'pointer'} onClick={() => setCommentsAreOpen(false)}>
							<a>Hide comments &#8593;</a>
						</strong>
						<CommentsView articleId={article.id} />
					</div>
					: <strong  className={'pointer'} onClick={() => setCommentsAreOpen(true)}>
						<a>Show comments &#8595;</a>
					</strong>
				}
			</div>
		</div>
	)
}

const selectArticle = (state, id) => (state.articles.data || []).find(article => article.id === id);

const mapStateToProps = (state, props) => ({
	article: selectArticle(state, +props.match.params.id)
});

export default connect(mapStateToProps, {})(ArticleView)
