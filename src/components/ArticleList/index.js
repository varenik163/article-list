import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ArticleList(props) {
	const { data }  = props;

	return data.map(article => (
		<Link key={article.id} className={'article_list-link'} to={`/${article.id}`}>{article.title}</Link>
	))
}

ArticleList.propTypes = {
	data: PropTypes.array.isRequired
};
