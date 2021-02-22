import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Carousel from 'nuka-carousel';

import CardList from '../components/CardList';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Text from '../components/Text';
import { SECTION_ALIGN, POSITION, BREAKPOINTS, IMAGES_MODE } from '../constants';
import SimpleCard from '../components/SimpleCard';
import PeopleCard from '../components/PeopleCard';
import { arrayOf, bool, string } from 'prop-types';
import {
	articleShape,
	claimShape,
	imageShape,
	personShape,
	contactDomainShape,
} from '../util/shapes';
import ContactDomain from './ContactDomain';

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

const SectionRenderer = ({
	sectionTitle,
	sectionText,
	align = '',
	dark,
	buttonPosition,
	buttonLink,
	buttonText,
	images,
	imagesMode,
	articles,
	claims,
	people,
	titleVisible,
	contactDomains,
}) => (
	<Section center={align.toLowerCase() === SECTION_ALIGN.CENTER} dark={dark}>
		{buttonPosition === POSITION.TOP && buttonLink && (
			<Link to={buttonLink}>
				<Button>{buttonText}</Button>
			</Link>
		)}

		{titleVisible && <Heading>{sectionTitle}</Heading>}
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

		{imagesMode === IMAGES_MODE.COLUMN &&
			images &&
			images.map(({ image, imageAlt }) => <ImageWrapper key={image} alt={imageAlt} src={image} />)}

		{imagesMode === IMAGES_MODE.CAROUSEL && images && (
			<Carousel autoplay={true} slidesToShow={3}>
				{images.map(({ image, imageAlt }) => (
					<ImageWrapper key={image} alt={imageAlt} src={image} />
				))}
			</Carousel>
		)}

		{contactDomains &&
			contactDomains.map((contactDomain, index) => (
				<ContactDomain key={index} {...contactDomain} />
			))}
	</Section>
);

SectionRenderer.propTypes = {
	sectionTitle: string,
	titleVisible: bool,
	sectionText: string,
	align: string,
	dark: bool,
	buttonPosition: string,
	buttonLink: string,
	buttonText: string,
	images: arrayOf(imageShape),
	imagesMode: string,
	articles: arrayOf(articleShape),
	claims: arrayOf(claimShape),
	people: arrayOf(personShape),
	contactDomains: arrayOf(contactDomainShape),
};

export default SectionRenderer;
