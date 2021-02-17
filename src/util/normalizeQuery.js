import { compose, head, map, pathOr } from 'ramda';

export const normalizeQuery = compose(
	map(pathOr({}, ['node', 'frontmatter'])),
	pathOr([], ['allMarkdownRemark', 'edges'])
);

export const normalizeSingleQuery = compose(head, normalizeQuery);
