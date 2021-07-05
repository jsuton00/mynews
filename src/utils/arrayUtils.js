export const groupBy = (array, key) => {
	let oldArray = [...array];
	return oldArray.reduce((result, currentValue) => {
		(result[currentValue[key]] = result[currentValue[key]] || []).push(
			currentValue,
		);
		return result;
	}, {});
};

export const searchArray = (arr, keyword) => {
	const searchTerm = keyword.toLowerCase();
	return arr.filter((item) =>
		item.title.toLowerCase().match(new RegExp(searchTerm, 'g')),
	);
};

export const removeDuplicates = (arr) => {
	return arr.reduce((acc, item) => {
		return acc.includes(item.title) ? acc : [...acc, item];
	}, []);
};
