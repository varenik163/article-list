import articles from './articles/reducers'
import comments from './comments/reducers'

export default {
	...articles,
	...comments
}
