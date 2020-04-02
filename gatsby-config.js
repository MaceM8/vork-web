require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  siteMetadata: {
    title: `Vork`,
    description: `Webové stránky Vorku`,
    author: `Martin Macháček`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://35.158.124.157:1337", //process.env.GATSBY_API_URL,
        // apiURL: process.env.GATSBY_API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "user-contact",
          "logo",
          "simple-card",
          "homepage",
          "pomahame",
          "people",
          "o-nas",
          "kontakt",
        ],
        queryLimit: 10,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["GATSBY_API_URL"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
