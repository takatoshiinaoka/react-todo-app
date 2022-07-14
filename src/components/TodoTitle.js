import React, { memo } from "react"

export const TodoTitle = memo(({ title, as }) => {
    if(as === "h1") return <h1>{title}</h1>
    if(as === "h2") return <h2>{title}</h2>
    return <p>{title}</p>
  })