import { arrayOf, string, shape } from 'prop-types';

export const imageShape = {
	image: string,
	imageAlt: string,
};

export const articleShape = {
	title: string,
	text: string,
	image: string,
	link: string,
};

export const claimShape = {
	title: string,
	text: string,
};

export const personShape = {
	name: string,
	description: string,
	image: string,
	linkedin: string,
	mail: string,
	phone: string,
};

export const contactDomainShape = {
	title: string,
	people: arrayOf(shape(personShape)),
};
