const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
allContentfulBlogPost {
    edges {
      node {
        title
        publicationDate
        slug
        content {
          content
        }
      }
    }
  }
}
`)
  result.data.allContentfulBlogPost.edges.forEach(item => {
    createPage({
      path: `/blog/${item.node.slug}`,
      component: path.resolve("./src/templates/blogpost.tsx"),
      context: {
        data: item.node,
      },
    })
  })
}