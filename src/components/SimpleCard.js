import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { WHITE, BORDER_RADIUS, PRIMARY } from '../constants';
import Heading from './Heading';
import Text from './Text';
import Link from './Link';
import hoverMedia from '../util/hover';

const Wrapper = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	background-color: ${WHITE};
	border-radius: ${BORDER_RADIUS};
	margin-bottom: 2rem;
	box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
	color: ${PRIMARY};
	text-transform: none;
	cursor: ${({ to }) => !to && 'initial'};

	${hoverMedia`
    transform: ${({ to }) => to && 'scale(1.03)'};
  `}
`;

const TextOnTop = styled(Text)`
	z-index: 1;
`;

const StyledImage = styled.img`
	position: absolute;
	right: 3rem;
	top: 50%;
	transform: translate(0, -50%);
	opacity: 0.3;
	max-height: 10rem;
`;

const SimpleCard = ({ heading, image, link, text, ...props }) => (
	<Wrapper {...props} to={link} as={link ? null : 'div'}>
		<Heading small>{heading}</Heading>
		<TextOnTop small colour={PRIMARY}>
			{text}
		</TextOnTop>
		{image && <StyledImage src={image} alt={image} />}
	</Wrapper>
);

SimpleCard.propTypes = {
	heading: string,
	image: string,
	link: string,
	text: string,
};

export default SimpleCard;
