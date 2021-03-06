const getSections = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "sections" } } }) {
				edges {
					node {
						frontmatter {
							sectionTitle
							titleVisible
							sectionText
							textSize
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
