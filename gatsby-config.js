require('dotenv').config()
module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
};
