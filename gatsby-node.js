const { compose, map, path, pathOr } = require('ramda');
const nodePath = require('path');

const PageTemplate = nodePath.resolve('src/templates/Page.js');

// NOTE: copied, since imported ramda functions by import cannot be used in node
const normalizeQuery = compose(
	map(pathOr({}, ['node', 'frontmatter'])),
	pathOr([], ['allMarkdownRemark', 'edges'])
);

const getDefaultSeo = compose(
	map(path(['node', 'siteMetadata'])),
	pathOr([], ['allSite', 'edges'])
);

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
						}
					}
				}
			}
		}
	`);

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const { data, errors } = await getPages(graphql);
	const { data: sectionsRaw, sectionsErrors } = await getSections(graphql);

	if (errors || sectionsErrors) {
		// if (errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');

		return;
	}

	const pages = normalizeQuery(data);
	console.log(pages);
	const defaultSeo = getDefaultSeo(data);
	const sectionsData = normalizeQuery(sectionsRaw);

	pages.forEach(({ route, ...data }) => {
		createPage({
			path: route,
			component: PageTemplate,
			context: {
				...data,
				defaultSeo,
				sectionsData,
			},
		});
	});
};
