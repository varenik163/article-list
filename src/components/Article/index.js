import React from 'react'
import { Link } from 'react-router-dom';

function Article (props) {
	const { article } = props;

	return (
		<div>
			<h1>{article.title}</h1>
			<Link className="back_link" to={'/'}>&#8592; Назад</Link>
			<p className={'article-text'}>{article.body}</p>
		</div>
	)
}

export default Article
