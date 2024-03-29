import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ description = '', lang = 'cs', meta = [], title }) => (
	<Helmet
		htmlAttributes={{
			lang,
		}}
		title={title}
		meta={[
			{
				name: `description`,
				content: description,
			},
			{
				property: `og:title`,
				content: title,
			},
			{
				property: `og:description`,
				content: description,
			},
			{
				property: `og:type`,
				content: `website`,
			},
			{
				name: `twitter:card`,
				content: `summary`,
			},
			// {
			// 	name: `twitter:creator`,
			// 	content: author,
			// },
			{
				name: `twitter:title`,
				content: title,
			},
			{
				name: `twitter:description`,
				content: description,
			},
		].concat(meta)}
	/>
);

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
