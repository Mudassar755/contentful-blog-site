import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO'

export default ({data}) => {
    console.log(data);
    return (
        <div>
          <SEO title="Home" description="this is our home page"  />
            <div>
              {data.allContentfulBlogPost.edges.map((blog, index) => (
                <div>
                <Link to={`/blog/${blog.node.slug}`} key={index}><h1>{blog.node.title}</h1></Link>
</div>
              ))}
              </div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
  }
`