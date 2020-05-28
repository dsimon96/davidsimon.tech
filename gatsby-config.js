require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `David Simon`,
    siteTitleAlt: `David Simon's Website and Blog`,
    siteHeadline: `David Simon's Website and Blog`,
    siteDescription: `The personal website and blog of software engineer David Simon.`,
    siteUrl: `https://davidsimon.tech`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `David Simon <D@vidSimon.tech>`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `M/D/YYYY`,
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/dsimon96/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/dsimon96`,
          },
        ],
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Simon's Website and Blog`,
        short_name: `davidsimon.tech`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#041A60`,
        display: `standalone`,
        icon: `static/apple-touch-icon.png`,
        icons: [
          {
            src: `/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            subsets: [`latin`],
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
  ],
};
