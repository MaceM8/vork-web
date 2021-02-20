import React, { Fragment } from 'react';
import styled from 'styled-components';
import { string, object } from 'prop-types';

import hoverMedia from '../util/hover';
import { TRANSITION_TIME } from '../constants';
import Icon from './Icon';
import Link from './Link';

const ImageOverlay = styled.div`
	position: absolute;
	opacity: 0;
	transition: opacity ${TRANSITION_TIME} ease-in-out;
`;

const PlainImageComponent = styled.img`
	width: 7rem;
	height: 7rem;
	border-radius: 50%;
	transition: opacity ${TRANSITION_TIME} ease-in-out;
`;

const ImageWrapper = styled(Link)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	cursor: pointer;
	transition: all ${TRANSITION_TIME} ease-in-out;

	${hoverMedia`
    transform: scale(1.05);

		${ImageOverlay} {
			opacity: 1;
		}

		${PlainImageComponent} {
			opacity: 0.3;
		}
  `};
`;

const RoundImage = ({ height, fixed, src, linkedin, ...props }) => (
	<ImageWrapper height={height} href={linkedin}>
		{src && (
			<Fragment>
				<PlainImageComponent src={src} {...props} />
				<ImageOverlay>
					<Icon icon="linkedin" size={3} />
				</ImageOverlay>
			</Fragment>
		)}
	</ImageWrapper>
);

RoundImage.propTypes = {
	height: string,
	fixed: object, // Object shape from Strapi
	url: string,
};

export default RoundImage;
