import React from 'react';
import styled from 'styled-components';
import { WHITE, BORDER_RADIUS, PRIMARY } from '../constants';
import Heading from './Heading';
import Text from './Text';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	background-color: ${WHITE};
	border-radius: ${BORDER_RADIUS};
	margin-bottom: 2rem;
	box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
	color: ${PRIMARY};
`;

const SimpleCard = ({ heading, text, ...props }) => (
	<Wrapper {...props}>
		<Heading small>{heading}</Heading>
		<Text small colour={PRIMARY}>
			{text}
		</Text>
	</Wrapper>
);

export default SimpleCard;
