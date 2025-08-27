import React from "react"

export default (tag, content) => {
  const element =
    tag === "h1" ? (
      <h1>{content}</h1>
    ) : tag === "h2" ? (
      <h2>{content}</h2>
    ) : tag === "h3" ? (
      <h3>{content}</h3>
    ) : tag === "h4" ? (
      <h4>{content}</h4>
    ) : tag === "p" ? (
      <p>{content}</p>
    ) : (
      <h2>{content}</h2>
    )

  return element
}
