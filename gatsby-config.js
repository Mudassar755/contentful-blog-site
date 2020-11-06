module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `l2fn69h6etg6`,
        accessToken: `8bAPRztPYcAxNLlYyHCHF-BXu4IcWoyRWQzQCAJhw9Q`,
      },
    },
  ],
};
