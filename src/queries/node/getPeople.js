const getPeople = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "people" } } }) {
				edges {
					node {
						frontmatter {
							name
							description
							image
							linkedin
							mail
							phone
						}
					}
				}
			}
		}
	`);

module.exports = getPeople;
