import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchNewsByCategory = async (category) => {
	return await axios.get(
		`https://newsapi.org/v2/top-headlines?country=us&countrygb&country&au&category=${category}&apiKey=${API_KEY}`,
	);
};

export const fetchAllNews = async () => {
	return await Promise.all([
		fetchNewsByCategory('general'),
		fetchNewsByCategory('business'),
		fetchNewsByCategory('health'),
		fetchNewsByCategory('science'),
		fetchNewsByCategory('sports'),
		fetchNewsByCategory('technology'),
	]).then((data) => data.map((data) => data.data.articles));
};
