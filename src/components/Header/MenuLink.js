import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import ExternalLink from '../ExternalLink';

const LinkBlock = styled.div`
	display: flex;
	justify-content: center;
`;

const LinkWrapper = styled.div`
	margin: 1.5rem 2rem;
`;

const MenuLink = ({ to, href, children }) => (
	<LinkBlock>
		<LinkWrapper>
			{to && (
				<Link withUnderline to={to}>
					{children}
				</Link>
			)}
			{href && (
				<ExternalLink withUnderline uppercase href={href}>
					{children}
				</ExternalLink>
			)}
		</LinkWrapper>
	</LinkBlock>
);

export default MenuLink;
