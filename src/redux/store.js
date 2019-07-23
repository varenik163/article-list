import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'
import reducers from './reducers';
import rootSaga from './sagas';
import { routerMiddleware, connectRouter } from 'connected-react-router'
// import regeneratorRuntime from 'regenerator-runtime'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
export const middlewares = [
	thunk,
	sagaMiddleware,
];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    		// Specify extension’s options
    	})
    	: compose;

const store = createStore(
	combineReducers({ ...reducers, router: connectRouter(history) }),
	composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
);
sagaMiddleware.run(rootSaga);
export default store;
