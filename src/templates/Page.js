import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../components/Layout';
import SectionRenderer from './SectionRenderer';

const Template = ({ pageContext }) => (
	<Layout>
		{console.log(pageContext.sections)}
		{pageContext.sections.map((sectionData) => (
			<SectionRenderer key={sectionData.sectionTitle} {...sectionData} />
		))}
	</Layout>
);

Template.propTypes = {
	pageContext: shape({ sections: arrayOf(shape({ sectionTitle: string })) }),
};

export default Template;
