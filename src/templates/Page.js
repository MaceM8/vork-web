import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../components/Layout';
import SectionRenderer from './SectionRenderer';
import { Helmet } from 'react-helmet';
import SEO from '../components/seo';

const Template = ({ pageContext, ...other }) => (
	<Layout>
		<Helmet>
			{/* Cookie consent for GDPR */}
			<script
				id="Cookiebot"
				src="https://consent.cookiebot.com/uc.js"
				data-cbid="1cfb8790-d0cf-4c76-b9e4-b8bddcf13d05"
				data-blockingmode="auto"
				type="text/javascript"
			></script>
		</Helmet>

		<SEO
			description={pageContext.seoDescription}
			title={pageContext.seoTitle}
			meta={pageContext.defaultSeo}
		/>

		{console.log({ pageContext, other })}
		{pageContext.sections.map((sectionData) => (
			<SectionRenderer key={sectionData.sectionTitle} {...sectionData} />
		))}

		<script
			id="CookieDeclaration"
			src="https://consent.cookiebot.com/1cfb8790-d0cf-4c76-b9e4-b8bddcf13d05/cd.js"
			type="text/javascript"
			async
		></script>
	</Layout>
);

Template.propTypes = {
	pageContext: shape({ sections: arrayOf(shape({ sectionTitle: string })) }),
};

export default Template;
