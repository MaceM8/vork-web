import React from 'react';
import styled, { css } from 'styled-components';
import { bool, func, node } from 'prop-types';

import { TRANSITION_TIME, WHITE } from '../../constants';
import Icon from '../Icon';

const Wrapper = styled.div`
	height: 100vh;
	position: fixed;
	top: 0px;
	right: 0px;
	width: 100%;
	z-index: 1;
	transition: transform ${TRANSITION_TIME};
	transform: translateX(100%);
	background-color: ${WHITE};

	display: flex;
	flex-direction: column;
	justify-content: center;

	${({ isOpened }) =>
		isOpened &&
		css`
			transform: translateX(0);
		`}
`;

const LinksWrapper = styled.div`
	text-align: center;
`;

const CloseIconWrapper = styled.div`
	position: absolute;
	right: 1rem;
	top: 1.7rem;
`;

const MobileMenu = ({ isOpened, onClose, children, ...props }) => (
	<Wrapper isOpened={isOpened} {...props}>
		<CloseIconWrapper onClick={onClose}>
			<Icon icon="close" size={2} />
		</CloseIconWrapper>
		<LinksWrapper>{children}</LinksWrapper>
	</Wrapper>
);

MobileMenu.propTypes = {
	isOpened: bool,
	onClose: func,
	children: node,
};

export default MobileMenu;
