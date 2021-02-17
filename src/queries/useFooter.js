import { useStaticQuery, graphql } from 'gatsby';

import { normalizeSingleQuery } from '../util/normalizeQuery';

const query = graphql`
	{
		allMarkdownRemark(filter: { fields: { sourceName: { eq: "footer" } } }) {
			edges {
				node {
					frontmatter {
						backLinkText
						privateDataProtectionText
						privateDataProtectionFile
						networks {
							icon
							link
						}
					}
				}
			}
		}
	}
`;

export const useFooter = () => normalizeSingleQuery(useStaticQuery(query));
