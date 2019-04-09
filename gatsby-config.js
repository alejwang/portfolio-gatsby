module.exports = {
  siteMetadata: {
    title: 'alejandro.wang',
    description: 'meet alejandro wang - ux designer/engineer',
  },
  plugins: [
    'gatsby-plugin-ngrok-tunneling',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'alejandro.wang',
        short_name: 'alej.wang',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-116480014-1",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    // 'gatsby-plugin-transition-link',
  ],
}
