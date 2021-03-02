import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import ExternalLink from './ExternalLink';
import { GREY3, BLUE, BREAKPOINTS, WHITE, TRANSITION_TIME, PRIMARY } from '../constants';
import { useFooter } from '../queries';

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	background-color: ${GREY3};
	padding: 2rem;
	justify-content: space-between;

	@media (min-width: ${BREAKPOINTS.TABLET}) {
		flex-direction: row;
	}
`;

const IconsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 2rem;

	& a {
		margin-right: 1.5rem;

		&:last-child {
			margin-right: 0;
		}
	}
`;

const RulesWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: ${BREAKPOINTS.TABLET}) {
		order: -1;
	}
`;

const FooterIcon = styled(Icon)`
	padding: 0.5rem;
	border: 1px solid ${BLUE};
	border-radius: 50%;
	transition: all ${TRANSITION_TIME};
	cursor: pointer;

	svg {
		path {
			fill: ${BLUE};
		}
	}

	@media (hover: hover) {
		&:hover {
			background: ${BLUE};

			svg {
				path {
					fill: ${WHITE};
				}
			}
		}
	}
`;

const MenuLink = styled.a`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	text-align: center;
	text-decoration: none;
	padding-top: 0.7rem;
	color: ${PRIMARY};

	::after {
		position: absolute;
		content: ' ';
		width: 0px;
		height: 0px;
		border: 1px solid black;
		border-right: transparent;
		border-bottom: transparent;
		padding: 0.5rem;
		transform: translate(-50%, 0) rotate(45deg);
		top: 0px;
		left: 50%;
	}
`;

const Footer = () => {
	const {
		backLinkText,
		privateDataProtectionFile,
		privateDataProtectionText,
		networks,
	} = useFooter();

	return (
		<FooterWrapper>
			<MenuLink href="#header">{backLinkText}</MenuLink>
			<IconsWrapper>
				{networks.map(({ icon, link }) => (
					<ExternalLink href={link} key={link}>
						<FooterIcon icon={icon} />
					</ExternalLink>
				))}
			</IconsWrapper>
			<RulesWrapper>
				<ExternalLink href={privateDataProtectionFile}>{privateDataProtectionText}</ExternalLink>
			</RulesWrapper>
		</FooterWrapper>
	);
};

export default Footer;
