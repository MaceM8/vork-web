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
							dark
							articles
							claims
							people
							imagesMode
							contactDomains
							images {
								image
								imageAlt
							}
						}
					}
				}
			}
		}
	`);

module.exports = getSections;
