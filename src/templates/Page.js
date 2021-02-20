import React from 'react';

import Layout from '../components/Layout';
import SectionRenderer from './SectionRenderer';

const Template = ({ pageContext }) => (
	<Layout>
		{pageContext.sections.map((sectionData) => (
			<SectionRenderer {...sectionData} />
		))}
	</Layout>
);

export default Template;
