import React from "react"
import SEO from "../components/SEO"

export default function BlogPost({ pageContext: { data } }) {
  return <>
  <SEO title={data.title} description={`${data.title} blog description`} />
  <div>{data.title}</div>
{/* <p>{data.}</p> */}
  </>
}
