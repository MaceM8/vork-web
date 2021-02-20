const getPeople = async (graphql) => {
	console.log('fetching people');

	return await graphql(`
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
};

module.exports = getPeople;
