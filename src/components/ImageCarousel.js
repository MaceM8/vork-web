import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import { arrayOf, bool, number, shape, string } from 'prop-types';

const ImageWrapper = styled.img`
	max-width: 100%;
	max-height: 10rem;
	width: auto !important;
	margin: auto;
`;

const StyledCarousel = styled(Carousel)`
	.slider-slide {
		display: flex !important;
		align-items: center;
		padding: 0 1rem !important;
	}
`;

const ImageCarousel = ({ autoplay = false, slidesToShow = 3, images }) => {
	if (!images) {
		return null;
	}

	return (
		<StyledCarousel
			autoplay={autoplay}
			slidesToShow={slidesToShow}
			defaultControlsConfig={{ nextButtonText: '>', prevButtonText: '<' }}
			renderBottomCenterControls={null}
			wrapAround={true}
		>
			{images.map(({ image, imageAlt }) => (
				<ImageWrapper key={image} alt={imageAlt} src={image} />
			))}
		</StyledCarousel>
	);
};

ImageCarousel.propTypes = {
	autoplay: bool,
	slidesToShow: number,
	images: arrayOf(
		shape({
			image: string,
			imageAlt: string,
		})
	),
};

export default ImageCarousel;
