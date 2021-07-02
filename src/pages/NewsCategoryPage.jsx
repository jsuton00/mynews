import React from 'react';
import News from '../components/News';

const NewsCategoryPage = (props) => {
	const { match } = props;
	let category = match.params && match.params.category;
	return (
		<div className="news-page news-category-page container-fluid">
			<div className="news-page-content container">
				<News category={category} />
			</div>
		</div>
	);
};

export default NewsCategoryPage;
