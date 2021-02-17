import styled from 'styled-components';

import { BLUE, WHITE, TRANSITION_TIME, BORDER_RADIUS, BEIGE } from '../constants';
import hoverMedia from '../util/hover';

const Button = styled.button`
	border: 2px solid ${BLUE};
	border-radius: ${BORDER_RADIUS};
	text-transform: uppercase;
	padding: 1rem 2rem;
	transition: all ${TRANSITION_TIME};
	cursor: pointer;
	background-color: ${BEIGE};
	color: ${BLUE};
	font-size: 14px;

	${hoverMedia`
    color: ${WHITE};
    background-color: ${BLUE};
  `}
`;

export default Button;
