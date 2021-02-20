import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import CardList from '../components/BlogCardList';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Text from '../components/Text';
import { SECTION_ALIGN, POSITION, BREAKPOINTS } from '../constants';
import SimpleCard from '../components/SimpleCard';
import PeopleCard from '../components/PeopleCard';

const ImageWrapper = styled.img`
	width: 100%;
`;

const PeopleWrapper = styled.div`
	display: grid;
	display: -ms-grid;
	grid-template-columns: 1fr;
	-ms-grid-columns: 1fr;
	grid-gap: 3rem 2rem;

	@media (min-width: ${BREAKPOINTS.TABLET}) {
		grid-template-columns: 1fr 1fr;
		-ms-grid-columns: 1fr 1fr;
	}
`;

const renderImages = (images) => {
	if (images) {
		return typeof images == 'string' ? (
			<ImageWrapper alt="Naše akce" src={images} />
		) : (
			images.map((image) => <ImageWrapper alt="Naše akce" src={image} />)
		);
	}
};

const SectionRenderer = ({
	sectionTitle,
	sectionText,
	align = '',
	dark,
	buttonPosition,
	buttonLink,
	buttonText,
	images,
	articles,
	claims,
	people,
}) => {
	console.log({ claims });

	return (
		<Section center={align.toLowerCase() === SECTION_ALIGN.CENTER} dark={dark}>
			{buttonPosition === POSITION.TOP && buttonLink && (
				<Link to={buttonLink}>
					<Button>{buttonText}</Button>
				</Link>
			)}

			<Heading>{sectionTitle}</Heading>
			<Text>{sectionText}</Text>

			<CardList cards={articles} />

			{people && (
				<PeopleWrapper>
					{people.map((person) => (
						<PeopleCard key={person.name} {...person} />
					))}
				</PeopleWrapper>
			)}

			{claims &&
				claims.map(({ title, text }) => <SimpleCard key={title} heading={title} text={text} />)}

			{buttonPosition === POSITION.BOTTOM && buttonLink && (
				<Link to={buttonLink}>
					<Button>{buttonText}</Button>
				</Link>
			)}

			{renderImages(images)}
		</Section>
	);
};

export default SectionRenderer;
