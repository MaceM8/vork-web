import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import CardList from '../components/BlogCardList';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Text from '../components/Text';
import { SECTION_ALIGN, POSITION } from '../constants';

const ImageWrapper = styled.img`
	width: 100%;
`;

const Template = ({ pageContext, ...props }) => {
	console.log('page props', props);
	console.log('page context', pageContext);

	const { sections, sectionsData } = pageContext;

	const pageSectionData = useMemo(
		() => sectionsData.filter(({ sectionTitle }) => sections.includes(sectionTitle)),
		[sections, sectionsData]
	);

	// TODO: Remove
	const cards = [
		{
			title: 'Jak z výjimečné firmy udělat průměrnou?',
			text:
				'Každá větší firma si tím prošla. Majitel založí firmu se zajímavou, výjimečnou myšlenkou a vytváří “zdravou” firemní kulturu. Zprvu se všichni uvnitř firmy znají, tvoří komunitu lidí se stejnými cíli.',
			imageSrc: 'https://miro.medium.com/max/1496/1*gxcusr3GoNQ8Gur1Nweolw@2x.jpeg',
			href:
				'https://medium.com/@tom.vodenka/jak-z-v%C3%BDjime%C4%8Dn%C3%A9-firmy-ud%C4%9Blat-pr%C5%AFm%C4%9Brnou-8d6319171262',
		},
	];

	const renderImages = (images) => {
		if (images) {
			return typeof images == 'string' ? (
				<ImageWrapper alt="Naše akce" src={images} />
			) : (
				images.map((image) => <ImageWrapper alt="Naše akce" src={image} />)
			);
		}
	};

	return (
		<Layout>
			{pageSectionData.map(
				({
					sectionTitle,
					sectionText,
					align = '',
					dark,
					buttonPosition,
					buttonLink,
					buttonText,
					images,
				}) => (
					<Section center={align.toLowerCase() === SECTION_ALIGN.CENTER} dark={dark}>
						{buttonPosition === POSITION.TOP && buttonLink && (
							<Link to={buttonLink}>
								<Button>{buttonText}</Button>
							</Link>
						)}

						{console.log(sectionTitle, images, typeof images)}
						<Heading>{sectionTitle}</Heading>
						<Text>{sectionText}</Text>
						{buttonPosition === POSITION.BOTTOM && buttonLink && (
							<Link to={buttonLink}>
								<Button>{buttonText}</Button>
							</Link>
						)}
						{renderImages(images)}
					</Section>
				)
			)}
			<Section center dark>
				<Heading>heading</Heading>
				<Text>text</Text>
				<CardList cards={cards} />
			</Section>
		</Layout>
	);
};

export default Template;
