import styled, { css } from 'styled-components';
import { Link as GasbyLink } from 'gatsby';
import { PRIMARY, TRANSITION_TIME } from '../constants';
import hoverMedia from '../util/hover';

const Link = styled(GasbyLink)`
	text-transform: uppercase;
	color: ${PRIMARY};
	transition: all ${TRANSITION_TIME};
	text-decoration: none;
	cursor: pointer;

	&:after {
		display: block;
		content: '';
		height: 2px;
		width: 0px;
		transition: width 0.2s ease-in-out 0s;
		background: ${PRIMARY};
	}

	${({ $withUnderline }) =>
		$withUnderline &&
		css`
			&[aria-current='page'] {
				&:after {
					width: 100%;
				}
			}
		`}

	${({ $withUnderline }) =>
		$withUnderline &&
		hoverMedia`
    &:after {
        width: 100%;
    }
  `}
`;

export default Link;
