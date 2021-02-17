import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Icon from './Icon';
import Image from './RoundImage';
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

const ConnectMedailon = ({
	user: { linkedin, email, name, phone, Picture = {}, text, title },

	...otherProps
}) => {
	if (!title) {
		return null;
	}

	return (
		<Wrapper {...otherProps}>
			<UserClaim>
				<UserClaimTitle>{title}</UserClaimTitle>
				<Text small>{text}</Text>
			</UserClaim>
			<Image
				fixed={Picture.childImageSharp ? Picture.childImageSharp.fixed : null}
				alt={name}
				src={Picture.url ? `${process.env.GATSBY_API_URL}${Picture.url}` : null}
			/>
			<LinksWrapper>
				{linkedin && (
					<ExternalLink href={linkedin}>
						<Icon icon="linkedin" color={GREY1} /> LinkedIn
					</ExternalLink>
				)}
				<ExternalLink href={`mailto:${email}`}>
					<Icon icon="email" color={GREY1} />
					{email}
				</ExternalLink>
				<ExternalLink href={`tel:${phone}`} color={GREY1}>
					<Icon icon="phone" />
					{phone}
				</ExternalLink>
			</LinksWrapper>
		</Wrapper>
	);
};

export default ConnectMedailon;
