import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Link from '../Link';
import { BREAKPOINTS } from '../../constants';
import Icon from '../Icon';
import MobileMenu from './MobileMenu';
import { useHeaderLinks } from '../../queries';
import MenuLink from './MenuLink';
import vorkLogo from '../../assets/images/VORK-logo.png';

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 5rem;
	padding: 0 1rem;
	position: relative;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	align-items: center;
	margin: 0 1rem;
`;

const MobileMenuWrapper = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	cursor: pointer;

	@media (min-width: ${BREAKPOINTS.LAPTOP}) {
		display: none;
	}
`;

const DesktopMenuWrapper = styled.div`
	display: none;
	height: 100%;
	align-items: center;

	@media (min-width: ${BREAKPOINTS.LAPTOP}) {
		display: flex;
	}
`;

const Header = () => {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
	const headerLinks = useHeaderLinks();

	return (
		<HeaderWrapper id="header">
			<Logo to="/">
				<Img src={vorkLogo} alt={'Some text'} />
			</Logo>
			<MobileMenuWrapper onClick={() => setMobileMenuVisible(true)}>
				<Icon icon="menu" />
			</MobileMenuWrapper>
			<DesktopMenuWrapper>
				{headerLinks.map(({ route, pageTitle, href }) => (
					<MenuLink key={route} to={route} href={href}>
						{pageTitle}
					</MenuLink>
				))}
			</DesktopMenuWrapper>
			<MobileMenu isOpened={isMobileMenuVisible} onClose={() => setMobileMenuVisible(false)} />
		</HeaderWrapper>
	);
};

export default Header;