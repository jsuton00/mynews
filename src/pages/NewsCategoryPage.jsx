import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsPageHeader from '../components/layouts/NewsPageHeader';
import NavTabs from '../components/mobile/NavTabs';
import News from '../containers/News';
import { useViewportContext } from '../hooks/useViewport';
import * as actions from '../store/actions/index';

const NewsCategoryPage = (props) => {
	const [width] = useViewportContext();
	const { match } = props;
	let category = match.params && match.params.category;
	const newsCategory = useSelector((state) => state.news.category);
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (category) {
				dispatch(actions.selectNewsCategory(category));
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [category, dispatch]);

	return (
		<div className="news-page news-category-page container-fluid">
			<div
				className={`news-page-${
					width <= 829 ? 'mobile' : 'desktop'
				}-display container-fluid`}
			>
				{width <= 829 ? (
					<div className="news-page-content container">
						<NavTabs category={newsCategory} />
					</div>
				) : (
					<>
						<NewsPageHeader newsCategory={category} />
						<div className="news-page-content container">
							<News category={newsCategory} />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default NewsCategoryPage;
