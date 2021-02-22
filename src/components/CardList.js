import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import BlogCard from './Card';
import { articleShape } from '../util/shapes';

const ListWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const CardList = ({ cards }) => (
	<ListWrapper>
		{cards && cards.map((props, index) => <BlogCard key={index} {...props} />)}
	</ListWrapper>
);

CardList.propTypes = { cards: arrayOf(shape(articleShape)) };

export default CardList;
