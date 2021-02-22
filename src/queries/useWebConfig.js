import { useStaticQuery, graphql } from 'gatsby';

import { normalizeSingleQuery } from '../util/normalizeQuery';

const query = graphql`
	{
		allMarkdownRemark(filter: { fields: { sourceName: { eq: "webConfig" } } }) {
			edges {
				node {
					frontmatter {
						logo
						title
						description
					}
				}
			}
		}
	}
`;
export const useWebConfig = () => normalizeSingleQuery(useStaticQuery(query));
