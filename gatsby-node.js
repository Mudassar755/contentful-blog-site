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
  console.log("result===>>>", result.data.allContentfulBlogPost.edges)
  result.data.allContentfulBlogPost.edges.forEach(item => {
    createPage({
      path: `/blog/${item.node.slug}`,
      component: path.resolve("./src/pages/blog/index.tsx"),
      context: {
        data: item.node,
      },
    })
  })
}