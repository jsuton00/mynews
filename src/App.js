import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import NavModal from './components/mobile/NavModal';
import NavMenu from './components/NavMenu';
import { useToggle } from './hooks/useToggle';
import { useViewportContext } from './hooks/useViewport';
import HomePage from './pages/HomePage';
import NewsCategoryPage from './pages/NewsCategoryPage';

const App = () => {
	const [width] = useViewportContext();
	const [isOpen, handleToggle, handleClose] = useToggle();
	return (
		<div id="app" className="app">
			<Header open={isOpen} toggle={handleToggle} handleClose={handleClose} />
			<main className="main container-fluid">
				<div className="main-content container">
					{width <= 992 ? (
						<></>
					) : (
						<div className="main-content-section news-category-navigation">
							<NavMenu />
						</div>
					)}
					{isOpen && width <= 992 ? (
						<NavModal isOpen={isOpen} close={handleClose} />
					) : (
						<></>
					)}
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
