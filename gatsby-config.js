/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
	siteMetadata: {
		title: `robmakesgam.es`,
		siteUrl: `https://www.robmakesgam.es`,
		description: `Website portfolio to display my work.`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-transformer-remark`,

		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/content/projects/`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
	],
};
