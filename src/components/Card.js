import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import ExternalLink from './ExternalLink';
import defaultImage from '../assets/images/gatsby-astronaut.png';

import { TRANSITION_TIME, BORDER_RADIUS, WHITE, BLUE, FONT_SIZE } from '../constants';
import hoverMedia from '../util/hover';
import Icon from './Icon';
import { string } from 'prop-types';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: ${BORDER_RADIUS};
	transition: all ${TRANSITION_TIME} ease-in-out;
	height: 31rem;
	width: 20rem;
	background-color: ${WHITE};
	color: ${BLUE};
	text-align: left;
	text-transform: none;
	overflow: hidden;
	margin-bottom: 2rem;

	${hoverMedia`
    transform: scale(1.03);
  `};
`;

const TitleImage = styled.img`
	height: 13rem;
	overflow: hidden;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 2rem;
	height: 14rem;
`;

const CardHeading = styled.h3`
	font-size: ${FONT_SIZE.BASIC};
	font-weight: bold;
	margin: 0;
`;

const CardText = styled(Text)`
	position: relative;
	overflow: hidden;
	margin-bottom: 0.4rem;

	&:after {
		content: '';
		text-align: right;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 30%;
		height: 1.2em;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
	}
`;

const Card = ({ image = defaultImage, title, text, link = '', ...props }) => (
	<ExternalLink to={link} href={link} {...props}>
		<Wrapper>
			<TitleImage src={image} alt="Obrázek článku" />
			<CardContent>
				<CardHeading>{title}</CardHeading>
				<CardText small>{text}</CardText>
				<Icon icon="chevronRight" />
			</CardContent>
		</Wrapper>
	</ExternalLink>
);

Card.propTypes = {
	image: string,
	title: string,
	text: string,
	link: string,
	href: string,
};

export default Card;
