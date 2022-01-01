import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../components/Layout';
import SectionRenderer from './SectionRenderer';
import SEO from '../components/seo';

const Template = ({ pageContext, ...other }) => (
	<Layout>
		<SEO
			description={pageContext.seoDescription}
			title={pageContext.seoTitle}
			meta={pageContext.defaultSeo}
		/>
		{pageContext.sections.map((sectionData) => (
			<SectionRenderer key={sectionData.sectionTitle} {...sectionData} />
		))}
	</Layout>
);

Template.propTypes = {
	pageContext: shape({ sections: arrayOf(shape({ sectionTitle: string })) }),
};

export default Template;
