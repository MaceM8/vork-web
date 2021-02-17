import React from 'react';

import MenuLink from './MenuLink';
import { MENU_LINKS } from '../../constants';

const MenuLinks = () =>
	MENU_LINKS.map(({ to, href, children }) => (
		<MenuLink key={to || href} to={to} href={href}>
			{children}
		</MenuLink>
	));

export default MenuLinks;
