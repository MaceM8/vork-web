// const { createPluginPaths, createPluginOptions } = require('gatsby-source-netlify-cms');
// const config = require(`./static/admin/config.json`); // netlify-cms config file (json format required)

require('dotenv').config({
	path: `.env.${process.env.MODE || 'development'}`,
});

module.exports = {
	siteMetadata: {
		title: `Vork`,
		description: `Webové stránky Vorku`,
		author: `Martin Macháček`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`,
		`gatsby-remark-source-name`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`,
			},
		},
		// NOTE: Netlify CMS content
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `footer`,
				path: `${__dirname}/content/footer`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/content/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `sections`,
				path: `${__dirname}/content/sections`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `articles`,
				path: `${__dirname}/content/articles`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `claims`,
				path: `${__dirname}/content/claims`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `people`,
				path: `${__dirname}/content/people`,
			},
		},
		// {
		//   resolve: `gatsby-source-medium`,
		//   options: {
		//     username: `@tom.vodenka`,
		//     limit: 3,
		//   },
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/,
				},
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		// {
		//   resolve: "gatsby-plugin-netlify-cms",
		//   options: {
		//     modulePath: `${__dirname}/src/cms/cms.js`,
		//   },
		// },
		// {
		//   resolve: "gatsby-source-netlify-cms",
		//   options: createPluginOptions(config)
		// },
		// ...createPluginPaths(config),
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				publicPath: 'admin', // This is also as a default
				htmlTitle: 'Vork web CMS administration',
				htmlFavicon: '',
			},
		},
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
