const getClaims = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "claims" } } }) {
				edges {
					node {
						frontmatter {
							title
							text
							image
							link
						}
					}
				}
			}
		}
	`);

module.exports = getClaims;
