const getPages = async (graphql) =>
	await graphql(`
		{
			allMarkdownRemark(filter: { fields: { sourceName: { eq: "pages" } } }) {
				edges {
					node {
						frontmatter {
							route
							pageTitle
							seoTitle
							seoDescription
							sections
						}
					}
				}
			}
			allSite {
				edges {
					node {
						siteMetadata {
							title
							description
							author
						}
					}
				}
			}
		}
	`);

module.exports = getPages;
