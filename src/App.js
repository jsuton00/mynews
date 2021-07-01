import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import HomePage from './pages/HomePage';
import NewsCategoryPage from './pages/NewsCategoryPage';

const App = () => {
	return (
		<div id="app" className="app">
			<Header />
			<main className="main container-fluid">
				<div className="main-content container">
					<div className="main-content-section news-category-navigation">
						<NavMenu />
					</div>
					<div className="main-content-section news-page-display">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/news/:category" component={NewsCategoryPage} />
						</Switch>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
