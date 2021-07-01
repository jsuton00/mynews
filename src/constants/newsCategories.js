import {
	BriefcaseIcon,
	GeneralNewsIcon,
	HealthIcon,
	HomeIcon,
	ScienceIcon,
	SportsIcon,
	TechnologyIcon,
} from '../utils/iconsImport';

export const NEWS_CATEGORIES = [
	{ category: 'home', slug: '', icon: <HomeIcon /> },
	{ category: 'general', slug: 'general', icon: <GeneralNewsIcon /> },
	{ category: 'business', slug: 'business', icon: <BriefcaseIcon /> },
	{ category: 'health', slug: 'health', icon: <HealthIcon /> },
	{ category: 'science', slug: 'science', icon: <ScienceIcon /> },
	{ category: 'sports', slug: 'sports', icon: <SportsIcon /> },
	{ category: 'technology', slug: 'technology', icon: <TechnologyIcon /> },
];
