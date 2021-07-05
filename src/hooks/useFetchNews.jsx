import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import { groupBy } from '../utils/arrayUtils';

const useFetchNews = (category) => {
	const allNews = useSelector((state) => state.news.filteredNews);
	const selectedNews = useSelector((state) => state.news.selectedNews);
	const news = useSelector((state) => state.news.filteredNewsByCategory);
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
	const latestAllNews = useSelector((state) => state.news.latestAllNews);
	const latestNews = useSelector((state) => state.news.latestNews);

	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(actions.fetchAllNews());
		});

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (category) {
				return dispatch(actions.fetchNewsByCategory(category));
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [category, dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectedNews) {
				dispatch(actions.addToBookmark(selectedNews));
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, selectedNews]);

	const groupArray = groupBy(allNews, 'section');

	return [groupArray, bookmarks, news, latestAllNews, latestNews];
};

export default useFetchNews;
