import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom'
import { history } from './redux/store'
import Main from './containers/Main'
import ArticleView from './containers/ArticleView'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" style={{ width: '100px', height: '100px' }} />
					<div className={'App-name'}>Article List</div>
					<div style={{ width: '80%' }}>
						<ConnectedRouter history={history}>
							<Switch>
								<Route path={'/'} component={Main} exact />
								<Route path={'/:id'} component={ArticleView} />
							</Switch>
						</ConnectedRouter>
					</div>
				</header>
			</div>
		</Provider>
	);
}

export default App;
