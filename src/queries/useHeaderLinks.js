import { useStaticQuery, graphql } from 'gatsby';

import { normalizeQuery } from '../util/normalizeQuery';

const query = graphql`
	{
		allMarkdownRemark(
			filter: { fields: { sourceName: { eq: "pages" } } } # sort: { fields: [frontmatter___pageOrder], order: ASC }
		) {
			edges {
				node {
					frontmatter {
						route
						pageTitle
						pageOrder
					}
				}
			}
		}
	}
`;
export const useHeaderLinks = () => normalizeQuery(useStaticQuery(query));
