import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import MainFooter from './MainFooter';

export default function Layout({ children }) {
	return (
		<Fragment>
			<MainNavigation />
			{children}
			<MainFooter />
		</Fragment>
	);
}
