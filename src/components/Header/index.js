import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '../Link';
import { BREAKPOINTS } from '../../constants';
import Icon from '../Icon';
import MobileMenu from './MobileMenu';
import { useHeaderLinks } from '../../queries';
import MenuLink from './MenuLink';
import { useWebConfig } from '../../queries/useWebConfig';

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 5rem;
	padding: 0 1rem;
	position: relative;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

const LogoWrapper = styled(Link)`
	display: flex;
	align-items: center;
	margin: 0 1rem;
`;

const Logo = styled.img`
	height: 50px;
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
	const { logo } = useWebConfig();

	return (
		<HeaderWrapper id="header">
			<LogoWrapper to="/">
				<Logo src={logo} alt={'Vork logo'} />
			</LogoWrapper>
			<MobileMenuWrapper onClick={() => setMobileMenuVisible(true)}>
				<Icon icon="menu" size={2} />
			</MobileMenuWrapper>
			<DesktopMenuWrapper>
				{headerLinks.map(({ route, redirect, pageTitle }) => (
					<MenuLink key={route} to={route} href={redirect}>
						{pageTitle}
					</MenuLink>
				))}
			</DesktopMenuWrapper>
			<MobileMenu isOpened={isMobileMenuVisible} onClose={() => setMobileMenuVisible(false)}>
				{headerLinks.map(({ route, redirect, pageTitle }) => (
					<MenuLink key={route} to={route} href={redirect}>
						{pageTitle}
					</MenuLink>
				))}
			</MobileMenu>
		</HeaderWrapper>
	);
};

export default Header;
