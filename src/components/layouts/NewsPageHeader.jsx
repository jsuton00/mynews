import React from 'react';

const NewsPageHeader = (props) => {
	const { newsCategory } = props;
	return (
		<div className="news-page-header container">
			<h5 className="news-page-title row">
				{newsCategory ? `${newsCategory} News` : `News`}
			</h5>
		</div>
	);
};

export default NewsPageHeader;
