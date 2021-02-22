const getContactDomains = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "contactDomains" } } }) {
				edges {
					node {
						frontmatter {
							title
							people
						}
					}
				}
			}
		}
	`);

module.exports = getContactDomains;
