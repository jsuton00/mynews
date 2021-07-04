import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsPageHeader from '../components/layouts/NewsPageHeader';
import News from '../containers/News';
import * as actions from '../store/actions/index';

const NewsCategoryPage = (props) => {
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
			<NewsPageHeader newsCategory={category} />
			<div className="news-page-content container">
				<News category={newsCategory} />
			</div>
		</div>
	);
};

export default NewsCategoryPage;
