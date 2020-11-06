import React from "react"

export default function BlogPost({ pageContext: { data } }) {
  return <>
  <div>{data.title}</div>
{/* <p>{data.}</p> */}
  </>
}
