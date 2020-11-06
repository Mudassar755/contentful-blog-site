module.exports = {
  siteMetadata: {
    title: "TechWorld Portfolio",
    description: "This is Technology Site",
    author: "@mudassar",
    twitterUsername: "@mudassar_755",
    image: "/twitter-img.png",
    siteUrl: "https://techworld.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `l2fn69h6etg6`,
        accessToken: `8bAPRztPYcAxNLlYyHCHF-BXu4IcWoyRWQzQCAJhw9Q`,
      },
    },
  ],
};
