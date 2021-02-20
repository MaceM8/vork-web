const getArticles = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "articles" } } }) {
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

module.exports = getArticles;
