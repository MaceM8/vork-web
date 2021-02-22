import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Icon from './Icon';
import RoundImage from './RoundImage';
import { BREAKPOINTS, GREY1 } from '../constants';
import ExternalLink from './ExternalLink';

const Wrapper = styled.div`
	display: grid;
	display: -ms-grid;
	grid-template-columns: 2fr 1fr;
	-ms-grid-columns: 2fr 1fr;
	grid-gap: 0.5rem;
	align-items: center;
	margin-bottom: 2rem;

	@media (min-width: ${BREAKPOINTS.TABLET}) {
		grid-template-columns: 1fr 1fr 1fr;
		-ms-grid-columns: 1fr 1fr 1fr;
		justify-items: center;
	}
`;

const UserClaim = styled.div`
	display: flex;
	flex-direction: column;
`;

const UserClaimTitle = styled.h3`
	margin: 0;
`;

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 1 / 3;
	width: fill-available;

	@media (min-width: ${BREAKPOINTS.TABLET}) {
		padding-left: 2rem;
		grid-column: inherit;
	}
`;

const ConnectMedailon = ({ mail, image, linkedin, name, phone, title, ...otherProps }) => {
	if (!name) {
		return null;
	}

	return (
		<Wrapper {...otherProps}>
			<UserClaim>
				<UserClaimTitle>{name}</UserClaimTitle>
			</UserClaim>
			<RoundImage src={image} alt={name} linkedin={linkedin} />
			<LinksWrapper>
				{linkedin && (
					<ExternalLink href={linkedin}>
						<Icon icon="linkedin" color={GREY1} /> LinkedIn
					</ExternalLink>
				)}
				<ExternalLink href={`mailto:${mail}`}>
					<Icon icon="email" color={GREY1} />
					{mail}
				</ExternalLink>
				<ExternalLink href={`tel:${phone}`} color={GREY1}>
					<Icon icon="phone" />
					{phone}
				</ExternalLink>
			</LinksWrapper>
		</Wrapper>
	);
};

ConnectMedailon.propTypes = {
	image: string,
	linkedin: string,
	mail: string,
	name: string,
	phone: string,
	title: string,
};

export default ConnectMedailon;
