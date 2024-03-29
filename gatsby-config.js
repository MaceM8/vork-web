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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Vork web`,
				short_name: `Vork web`,
				start_url: `/`,
				display: `standalone`,
				icon: 'src/assets/images/VORK-favicon.png',
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-remark-source-name`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: 'gatsby-plugin-cookiebot',
			options: {
				cookiebotId: '1cfb8790-d0cf-4c76-b9e4-b8bddcf13d05', // Required. Site's Cookiebot ID.
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-PCL8NVG',
				enableWebVitalsTracking: true,
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contactDomains`,
				path: `${__dirname}/content/contactDomains`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `webConfig`,
				path: `${__dirname}/content/webConfig`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
