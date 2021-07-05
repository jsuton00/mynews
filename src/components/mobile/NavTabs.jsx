import React, { useState } from 'react';
import { TAB_KEYS } from '../../constants/tabKeys';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation } from 'react-router';
import MobileAllNews from './MobileAllNews';
import MobileNews from './MobileNews';

const NavTabs = (props) => {
	const { category } = props;
	const [key, setKey] = useState(TAB_KEYS[0]);

	const location = useLocation();
	return (
		<Tabs
			defaultActiveKey={TAB_KEYS[0]}
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className="nav-tabs"
			variant="pills"
		>
			{TAB_KEYS.map((key, index) => {
				return (
					<Tab key={index} eventKey={key} title={key} className="nav-tab">
						{location.pathname === '/' ? (
							<MobileAllNews tabKey={key} switchTab={setKey} />
						) : (
							<MobileNews tabKey={key} category={category} />
						)}
					</Tab>
				);
			})}
		</Tabs>
	);
};

export default NavTabs;
