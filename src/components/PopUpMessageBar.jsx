import React from 'react';

const PopUpMessageBar = (props) => {
	const { closePopUp } = props;
	return (
		<div className="pop-up-message-bar row">
			<div className="pop-up-message-bar-section text-section">
				<p className="pop-up-message-highligted-text">
					Make MyNews your homepage
				</p>
				<p className="pop-up-message-text">
					Every day discover what's trending on the Internet
				</p>
			</div>
			<div className="pop-up-message-bar-section add-to-homepage-section">
				<div className="add-to-homepage">
					<button type="button" className="btn add-to-homepage-btn">
						Get
					</button>
				</div>
				<div className="reject">
					<button
						type="button"
						className="btn reject-btn"
						onClick={() => closePopUp()}
					>
						No, thanks
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopUpMessageBar;
