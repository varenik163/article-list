import React, { useEffect } from 'react'
import ArticleList from '../../components/ArticleList'
import actions from '../../redux/articles/actions'
import { connect } from 'react-redux'
import Loader from "../../components/Loader";

const { fetchArticles } = actions;

function Main(props) {

	useEffect(() => {
		props.fetchArticles()
	}, []);

	const { articles } = props;

	const loading = articles.loading && <Loader />;

	return (
		<div>
			{loading}
			<ArticleList data={articles.data || []} />
		</div>
	);
}

export default connect(
	state => ({
		articles: state.articles
	}),
	{
		fetchArticles
	}
)(Main)
