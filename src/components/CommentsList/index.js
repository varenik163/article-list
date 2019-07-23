import React from 'react'

function CommentsList(props) {
	return props.comments.map(comment => (
		<div key={comment.id} className={'comment'}>
			<p className={'comment-head'}>{comment.email} | {comment.name}</p>
			<p>{comment.body}</p>
		</div>
	));
}

export default CommentsList
