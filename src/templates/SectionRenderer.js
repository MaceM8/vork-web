import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { arrayOf, bool, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';

import CardList from '../components/CardList';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Text from '../components/Text';
import { SECTION_ALIGN, POSITION, BREAKPOINTS, IMAGES_MODE } from '../constants';
import SimpleCard from '../components/SimpleCard';
import PeopleCard from '../components/PeopleCard';
import {
	articleShape,
	claimShape,
	imageShape,
	personShape,
	contactDomainShape,
} from '../util/shapes';
import ContactDomain from './ContactDomain';
import ImageCarousel from '../components/ImageCarousel';
import useWindowSize from '../util/useWindowSize';
import getBreakpointValue from '../util/getBreakpointValue';

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
	align = '',
	articles,
	buttonLink,
	buttonPosition,
	buttonText,
	claims,
	contactDomains,
	dark,
	images,
	imagesMode,
	people,
	sectionText,
	sectionTitle,
	textSize,
	titleVisible,
}) => {
	const windowSize = useWindowSize();

	return (
		<Section center={align.toLowerCase() === SECTION_ALIGN.CENTER} dark={dark}>
			{buttonPosition === POSITION.TOP && buttonLink && (
				<Link to={buttonLink}>
					<Button>{buttonText}</Button>
				</Link>
			)}

			{titleVisible && <Heading>{sectionTitle}</Heading>}
			{sectionText && (
				<Text small={textSize === 'small'}>
					<ReactMarkdown>{sectionText}</ReactMarkdown>
				</Text>
			)}

			<CardList cards={articles} />

			{people && (
				<PeopleWrapper>
					{people.map((person) => (
						<PeopleCard key={person.name} {...person} />
					))}
				</PeopleWrapper>
			)}

			{claims &&
				claims.map(({ title, ...props }) => <SimpleCard key={title} heading={title} {...props} />)}

			{buttonPosition === POSITION.BOTTOM && buttonLink && (
				<Link to={buttonLink}>
					<Button>{buttonText}</Button>
				</Link>
			)}

			{imagesMode === IMAGES_MODE.COLUMN &&
				images &&
				images.map(({ image, imageAlt }) => (
					<ImageWrapper key={image} alt={imageAlt} src={image} />
				))}

			{imagesMode === IMAGES_MODE.CAROUSEL && (
				<ImageCarousel
					images={images}
					slidesToShow={windowSize.width >= getBreakpointValue(BREAKPOINTS.TABLET) ? 3 : 1}
				/>
			)}

			{contactDomains &&
				contactDomains.map((contactDomain, index) => (
					<ContactDomain key={index} {...contactDomain} />
				))}
		</Section>
	);
};

SectionRenderer.propTypes = {
	align: string,
	articles: arrayOf(shape(articleShape)),
	buttonLink: string,
	buttonPosition: string,
	buttonText: string,
	claims: arrayOf(shape(claimShape)),
	contactDomains: arrayOf(shape(contactDomainShape)),
	dark: bool,
	images: arrayOf(shape(imageShape)),
	imagesMode: string,
	people: arrayOf(shape(personShape)),
	sectionText: string,
	sectionTitle: string,
	textSize: string,
	titleVisible: bool,
};

export default SectionRenderer;
