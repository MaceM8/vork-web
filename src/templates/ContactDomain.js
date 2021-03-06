import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ConnectMedailon from '../components/ConnectMedailon';
import Heading from '../components/Heading';
import { personShape } from '../util/shapes';

const ContentSpaceDivider = styled.div`
	margin-bottom: 7rem;
`;

const ContactDomain = ({ title, people, ...props }) => (
	<ContentSpaceDivider {...props} id={title}>
		<Heading>{title}</Heading>
		{people.map((person) => (
			<ConnectMedailon key={person.name} {...person} />
		))}
	</ContentSpaceDivider>
);

ContactDomain.propTypes = {
	title: string,
	people: arrayOf(shape(personShape)),
};

export default ContactDomain;
