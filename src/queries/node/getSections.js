const getSections = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "sections" } } }) {
				edges {
					node {
						frontmatter {
							sectionTitle
							sectionText
							align
							buttonText
							buttonLink
							buttonPosition
							images
							dark
							articles
							claims
							people
						}
					}
				}
			}
		}
	`);

module.exports = getSections;
