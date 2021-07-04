import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchNewsByCategory = async (category) => {
	return await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`,
	);
};

export const fetchAllNews = async () => {
	return await Promise.all([
		fetchNewsByCategory('world'),
		fetchNewsByCategory('business'),
		fetchNewsByCategory('health'),
		fetchNewsByCategory('science'),
		fetchNewsByCategory('sports'),
		fetchNewsByCategory('technology'),
	]).then((data) => data.map((data) => data.data.results));
};
