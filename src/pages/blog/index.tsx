import React from "react"

export default function Blog({ pageContext: { data } }) {
  console.log("datata", data.content)
  return <>
  <div>{data.title}</div>
{/* <p>{data.}</p> */}
  </>
}
