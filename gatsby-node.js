const { compose, map, path, pathOr, propEq } = require('ramda');
const nodePath = require('path');

const {
	getArticles,
	getClaims,
	getPages,
	getPeople,
	getSections,
	getContactDomains,
} = require('./src/queries/node');

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

const filterEntities = (entityIds, idPropName, allEntities) =>
	entityIds.map((id) => allEntities.find(propEq(idPropName, id)));

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const { data: pagesRaw, errors: pagesErrors } = await getPages(graphql);

	const { data: articlesRaw, errors: articleErrors } = await getArticles(graphql);
	const { data: claimsRaw, errors: claimsErrors } = await getClaims(graphql);
	const { data: peopleRaw, errors: peopleErrors } = await getPeople(graphql);
	const { data: sectionsRaw, errors: sectionsErrors } = await getSections(graphql);
	const { data: contactDomainsRaw, errors: contactDomainsErrors } = await getContactDomains(
		graphql
	);

	if (
		(articleErrors || claimsErrors || pagesErrors || peopleErrors || sectionsErrors,
		contactDomainsErrors)
	) {
		// if (errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');

		return;
	}

	const pages = normalizeQuery(pagesRaw) || [];

	const articles = normalizeQuery(articlesRaw) || [];
	const claims = normalizeQuery(claimsRaw) || [];
	const people = normalizeQuery(peopleRaw) || [];
	const sections = normalizeQuery(sectionsRaw) || [];
	const contactDomains = normalizeQuery(contactDomainsRaw) || [];

	const contactDomainsPopulated = contactDomains.map(({ title, people: contactDomainPeople }) => ({
		title,
		people: filterEntities(contactDomainPeople || [], 'name', people),
	}));

	const defaultSeo = getDefaultSeo(pages);

	pages.forEach(({ route, redirect, ...data }) => {
		if (!redirect) {
			const pageSections = filterEntities(data.sections || [], 'sectionTitle', sections) || [];
			const pageSectionsEnriched = pageSections.map((section) => ({
				...section,
				articles: filterEntities(section.articles || [], 'title', articles),
				claims: filterEntities(section.claims || [], 'title', claims),
				people: filterEntities(section.people || [], 'name', people),
				contactDomains: filterEntities(
					section.contactDomains || [],
					'title',
					contactDomainsPopulated
				),
			}));

			createPage({
				path: route,
				component: PageTemplate,
				context: {
					...data,
					defaultSeo,
					sections: pageSectionsEnriched,
				},
			});
		}
	});
};
