module.exports = {
  siteMetadata: {
    title: `MyData - gatsby + contentful + netlify practice site`,
    description: `track yer data - everyone else already is`,
    author: `kennan smith`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qc9g28wpd03d`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `JeeA7mEcLRNNMGSQN59MdEoxM8m0vhJJhM7xvuOlm64`,
      },
    },
    'gatsby-image',
    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: './src/store/createStore'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
