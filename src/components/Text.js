import styled, { css } from 'styled-components';
import { FONT_SIZE, WHITE } from '../constants';
import { bool } from 'prop-types';

const Text = styled.p`
	margin-bottom: ${({ smallMargin }) => (smallMargin ? '2rem' : '6rem')};
	font-size: ${FONT_SIZE.TEXT};
	text-shadow: 0px 0px 3px ${WHITE};

	${({ small }) =>
		small &&
		css`
			margin: 0;
			font-size: ${FONT_SIZE.BASIC};
		`}
`;

Text.propTypes = {
	smallMargin: bool,
	small: bool,
};

export default Text;
