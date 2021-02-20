import React from 'react';
import styled from 'styled-components';

import { WHITE, BORDER_RADIUS } from '../constants';
import Heading from './Heading';
import Text from './Text';
import RoundImage from './RoundImage';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	background-color: ${WHITE};
	border-radius: ${BORDER_RADIUS};
	margin: 0 auto;
	box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
	max-width: 275px;
`;

const BioWrapper = styled.div`
	margin-top: 2rem;
`;

const PeopleCard = ({ name, description, image, linkedin }) => (
	<Wrapper>
		<RoundImage src={image} alt={image} linkedin={linkedin} />
		<BioWrapper>
			<Heading small center>
				{name}
			</Heading>
			<Text small>{description}</Text>
		</BioWrapper>
	</Wrapper>
);

export default PeopleCard;
